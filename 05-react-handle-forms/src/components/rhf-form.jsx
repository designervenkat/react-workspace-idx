import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Loader from "./shared/Loader";

export default function ReactHookFormThree() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      social: {
        facebook: "",
        instagram: "",
      },
      checkbox: [],
      mobileNumbers: [{ number: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "mobileNumbers",
    control,
  });

  // custom handle function
  const onSubmit = async ({ username, email, social, checkbox }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log({ username, email, social, checkbox });
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

          {/* <div className="flex items-center justify-between gap-x-2">
            <input
              {...register("checkbox")}
              type="checkbox"
              className="text-white"
              value="Superman"
            />

            <input
              {...register("checkbox")}
              type="checkbox"
              className="text-white"
              value="Flash"
            />

            <input
              {...register("checkbox")}
              type="checkbox"
              className="text-white"
              value="Batman"
            />
          </div> */}

          <div>
            <div className="flex items-center justify-between gap-x-2">
              <label> List of phone number </label>
              <button
                className="w-16 h-6 rounded-sm bg-green-500 text-2xl flex items-center justify-center"
                type="button"
                onClick={() => append({ number: "" })}
              >
                +
              </button>
            </div>

            <div className="flex items-center justify-between gap-x-2">
              <div className="my-2">
                {fields.map((item, index) => (
                  <div className="form-control" key={item.id}>
                    <input
                      type="text"
                      className="form-input "
                      {...register(`mobileNumbers.${index}.number`)}
                      placeholder="Add your phone number"
                    />
                    {index > 0 && (
                      <button
                        className="w-10 h-10 rounded-full bg-orange-500 text-2xl"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="form-button flex justify-center items-center"
          >
            {isSubmitting ? <Loader /> : "Submit"}
          </button>
        </form>
      </div>
      <DevTool control={control} />
    </div>
  );
}
