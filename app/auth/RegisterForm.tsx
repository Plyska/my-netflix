import Input from "@/components/Input";
import { TabProps } from "./types";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormFields } from "./types";

const RegisterForm = ({ toggleTab }: TabProps) => {
  const { register, handleSubmit } = useForm<RegisterFormFields>();

  const submitRegisterForm: SubmitHandler<RegisterFormFields> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2 className="text-white text-4xl mb-8 font-semibold">Sign Up</h2>
      <form
        onSubmit={handleSubmit(submitRegisterForm)}
        className="flex flex-col gap-4"
      >
        <Input
          {...register("username")}
          label="Username"
          id="name"
          type="text"
        />

        <Input {...register("email")} label="Email" id="email" type="email" />

        <Input
          {...register("password")}
          label="Password"
          id="password"
          type="password"
        />

        <button
          type="submit"
          className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-800 transition"
        >
          Register
        </button>
      </form>
      <p className="text-neutral-500 mt-12">
        Do you have an account?
        <span
          onClick={toggleTab}
          className="text-white ml-1 hover:underline cursor-pointer"
        >
          Sign In
        </span>
      </p>
    </>
  );
};

export default RegisterForm;
