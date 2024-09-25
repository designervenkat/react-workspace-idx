import { useForm } from "react-hook-form";
import Loader from "./shared/Loader";

export default function ReactHookFormTwo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    // defaultValues: {
    //   username: "JohnDoe",
    //   email: "john@gmail.com",
    //   mobile: "9900990099",
    //   password: "",
    // },
    defaultValues: async () => {
        const respone = await fetch("https://jsonplaceholder.typicode.com/users/4")
        const data = await respone.json()
        return {
            username: data.username,
            email: data.email,
            mobile: '',
            password: ''
        }

    }
  });

  // custom handle function
  const onSubmit = async ({ username, mobile, email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log({ username, mobile, email, password });
  };
  return (
    <div className="h-screen w-full max-w-7xl mx-auto grid place-content-center">
      <div className="flex flex-col gap-y-6">
        <h2 className="text-xl font-bold mb-6">
          Handle forms with React Hook Form Two
        </h2>

        <form
          className="flex flex-col gap-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="enter your username"
            className="form-input"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
            })}
          />
          {errors.username && (
            <span className="text-red-400 block">
              {errors.username?.message}
            </span>
          )}

          <input
            type="number"
            placeholder="enter your mobile number"
            className="form-input"
            {...register("mobile", {
              valueAsNumber: true,
              required: "Mobile number is required",
              minLength: {
                value: 10,
                message: "Mobile number must be at least 10 characters",
              },
              pattern: {
                value:
                  /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
                message: "Invalid mobile number",
              },
            })}
          />
          {errors.mobile && (
            <span className="text-red-400 block">{errors.mobile?.message}</span>
          )}

          <input
            type="text"
            placeholder="enter your email"
            className="form-input"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter a different valid email id!"
                  );
                },
                notBlackListedDomain: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("domain.com") ||
                    "This domain is not supported! Please enter different email!"
                  );
                },
                notYahooDomain: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("yahoo.com") ||
                    "This yahoo domain is not supported!"
                  );
                },
              },
            })}
          />
          {errors.email && (
            <span className="text-red-400 block">{errors.email?.message}</span>
          )}

          <input
            type="password"
            placeholder="enter your password"
            className="form-input"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 16,
                message: "Password must be at most 16 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-400 block">
              {errors.password?.message}
            </span>
          )}

          <button
            type="submit"
            className="form-button flex justify-center items-center"
          >
            {isSubmitting ? <Loader /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
