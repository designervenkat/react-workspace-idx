import Loader from "./shared/Loader";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignup } from "../validations";
import { DevTool } from "@hookform/devtools";

export default function ZodReactForm() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(userSignup),
  });

  // custom handle function
  const onSubmit = async ({
    username,
    email,
    password,
    confirmPassword,
    gender,
    terms,
  }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?email=${email}`
    );
    const data = await response.json();
    if (data.length > 0) {
      setError("root", {
        message: "Email already exist! Please try to login!",
      });
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log({ username, email, password });
    }
  };
  return (
    <div className="h-screen w-full max-w-7xl mx-auto grid place-content-center">
      <div className="flex flex-col gap-y-6">
        <h2 className="text-xl font-bold mb-6">
          Handle forms with React Hook and ZOD validation
        </h2>

        <form
          className="flex flex-col gap-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="enter your username"
            className="form-input caret-yellow-500"
            {...register("username")}
          />
          {errors.username && (
            <span className="text-red-400 block">
              {errors.username?.message}
            </span>
          )}

          <input
            type="text"
            placeholder="enter your email"
            className="form-input caret-yellow-500 focus:ring-2 outline-1 ring-yellow-400 "
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-400 block">{errors.email?.message}</span>
          )}

          <input
            type="password"
            placeholder="enter your password"
            className="form-input caret-yellow-500"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-400 block">
              {errors.password?.message}
            </span>
          )}

          <input
            type="password"
            placeholder="Confirm your password"
            className="form-input caret-yellow-500"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <span className="text-red-400 block">
              {errors.confirmPassword?.message}
            </span>
          )}

          {/* Fixed the code */}
          <fieldset>
            <legend>Select gender:</legend>

            <div className="flex items-center gap-x-2">
              <input type="radio" value="Female" {...register("gender")} />
              <label htmlFor="female">Female</label>
            </div>

            <div className="flex items-center gap-x-2">
              <input type="radio" value="Male" {...register("gender")} />
              <label htmlFor="male">Male</label>
            </div>

            <div className="flex items-center gap-x-2">
              <input type="radio" value="Others" {...register("gender")} />
              <label htmlFor="others">Others</label>
            </div>
          </fieldset>

          {errors.gender && (
            <span className="text-red-400 block">{errors.gender?.message}</span>
          )}

          <div className="flex items-center gap-x-2">
            <input type="checkbox" name="terms" {...register("terms")} />
            <label htmlFor="terms">Terms and Conditions</label>
          </div>
          {errors.terms && (
            <span className="text-red-400 block">{errors.terms?.message}</span>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`form-button flex justify-center items-center`}
          >
            {isSubmitting ? <Loader /> : "Submit"}
          </button>

          {errors.root && (
            <span className="text-red-400 block">{errors.root?.message}</span>
          )}
        </form>
      </div>
      <DevTool control={control} />
    </div>
  );
}
