import { SyntheticEvent } from "react";
import Input from "@/components/Input";
import { TabProps } from "./types";

const LoginForm = ({ toggleTab }: TabProps) => {
  const submitLoginForm = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
      <form onSubmit={submitLoginForm} className="flex flex-col gap-4">
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
          Login
        </button>
      </form>
      <p className="text-neutral-500 mt-12">
        First time using Netflix?
        <span onClick={toggleTab} className="text-white ml-1 hover:underline cursor-pointer">
          Create an account
        </span>
      </p>
    </>
  );
};

export default LoginForm;
