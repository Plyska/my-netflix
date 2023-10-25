import { SyntheticEvent } from "react";
import Input from "@/components/Input";
import { TabProps } from "./types";

const RegisterForm = ({ toggleTab }: TabProps) => {
  const submitRegisterForm = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <h2 className="text-white text-4xl mb-8 font-semibold">Sign Up</h2>
      <form onSubmit={submitRegisterForm} className="flex flex-col gap-4">
        <Input
          name="username"
          //   value={username}
          //   onChange={handleChangeUsername}
          label="Username"
          id="name"
        />

        <Input
          name="email"
          //   value={email}
          //   onChange={handleChangeEmail}
          label="Email"
          id="email"
          type="email"
        />

        <Input
          name="password"
          //   value={password}
          //   onChange={handleChangePassword}
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
