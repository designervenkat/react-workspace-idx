import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Loader from "./shared/Loader";
import { Watch } from "lucide-react";


export default function ReactHookFormFour() {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      social: {
        facebook: "",
        instagram: "",
      },
    },
  });

  // custom handle function
  const onSubmit = async ({ username, email, social }) => {
   
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setError("root", {      
        message: "Something went wrong",
      })
    throw new Error()
    
    console.log({ username, email, social });
  };

  

  // custom function to get values
  const handleGetValues = () => {
    console.log("Values:", getValues("social.instagram"));
  };

  // custom function to set values
  const handleSetValues = () => {
    console.log(
      "Set Values:",
      setValue("username", "Batman", {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      })
    );
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
            type="text"
            placeholder="enter your facebook handle"
            className="form-input"
            {...register("social.facebook")}
          />
          <input
            type="text"
            placeholder="enter your instagram handle"
            className="form-input"
            {...register("social.instagram")}
          />
        
        {errors.root && <p className="text-red-400 block">{errors.root.message}</p>}
          <button
            type="submit"
            className="form-button flex justify-center items-center"
          >
            {isSubmitting ? <Loader /> : "Submit"}
          </button>

          <button
            onClick={handleGetValues}
            className="form-button flex justify-center items-center !bg-green-600"
            type="button"
          >
            Get Values
          </button>

          <button
            onClick={handleSetValues}
            className="form-button flex justify-center items-center !bg-orange-600"
            type="button"
          >
            Set Values
          </button>
        </form>
      </div>
      <DevTool control={control} />
    </div>
  );
}
