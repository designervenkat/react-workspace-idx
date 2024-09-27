import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(form);

  // custom handle function
  const onSubmit = ({ username, mobile, email, password }) => {
    // const {mobile} = data
    // // converting string to number
    // const isNumber = Number(mobile)
    // const isNumber = +mobile
    // Number and + =
    // parseInt and parseFloat =
    const isNumber = parseInt(mobile)    
    console.log(typeof(isNumber))
    console.log({
      username,
      mobile: isNumber,
      email,
      password,
    });
  };
  return (
    <div className="h-screen w-full max-w-7xl mx-auto grid place-content-center">
      <div className="flex flex-col gap-y-6">
        <h2 className="text-xl font-bold mb-6">
          Handle forms with React Hook Form{" "}
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
              required: "Mobile number is required",
              minLength: {
                value: 10,
                message: "Mobile number must be at least 10 characters",
              },
              pattern:{
                value: /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
                message: "Invalid mobile number",
              }            
            })}
          />
          {errors.mobile && (
            <span className="text-red-400 block">
              {errors.mobile?.message}
            </span>
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

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
