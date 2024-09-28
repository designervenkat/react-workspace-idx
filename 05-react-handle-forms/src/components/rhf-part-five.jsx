import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Loader from "./shared/Loader";
import { useEffect } from "react";



export default function ReactHookFormFive() {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    watch,
    setError,
    setFocus,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid, isSubmitSuccessful, isSubmitted, submitCount },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  // custom handle function
  const onSubmit = async ({ username, email }) => {
   
    await new Promise((resolve) => setTimeout(resolve, 1000));  
    console.log({ username, email });

  };

  useEffect(() => {
    setFocus("username");
  }, [setFocus])

//   useEffect(() => {
//     if(isSubmitSuccessful){
//         reset()
//     }
//   }, [isSubmitSuccessful, reset])

  console.log({isDirty, isValid, isSubmitting });
  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful,  submitCount})

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
            className="form-input caret-yellow-500"            
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
            type="text"
            placeholder="enter your email"
            className="form-input caret-yellow-500 focus:ring-2 outline-1 ring-yellow-400 "
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
              validate: {
                emailAvailable: async (fieldValue) => {
                    const response = await fetch(
                        
                        `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                    )
                    const data = await response.json()
                    return data.length > 0 ? setError("root", {message: "Email already exist!"}) : setError("root", {message: "Email is available!"})                                
                }
              }
            })}
          />
          {errors.email && (
            <span className="text-red-400 block">{errors.email?.message}</span>
          )}          
        
        {errors.root && <p className="text-red-400 block">{errors.root.message}</p>}
          <button
            type="submit"
            disabled={!isDirty || isSubmitting}
            className={`form-button flex justify-center items-center`}
          >
            {isSubmitting ? <Loader /> : "Submit"}
          </button>

          
        </form>
      </div>
      <DevTool control={control} />
    </div>
  );
}
