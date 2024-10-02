import { z } from "zod";

export const userSignup = z
  .object({
    username: z.string().min(4, "Please enter your username"),
    email: z
      .string()
      .email("Please enter a valid email address")
      .refine(
        // add debounce
        async (fieldValue) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
          );
          const data = await response.json();
          return data.length > 0 ? false : true;
        },
        {
          message: "Email already exist!",
        }
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain one small letter")
      .regex(/\d/, "Password must contain at least one digit")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),

    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),

    gender: z.enum(["Male", "Female", "Others"], {
      message: "Please select a gender",
    }),
    terms: z
      .boolean()
      .refine(
        (value) => value === true,
        "You must agree to terms and conditions"
      ),
  })
  .refine((value) => value.password === value.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match! Please check again",
  });
