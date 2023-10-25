"use client";
import Image from "next/image";
import { useState, ChangeEvent, useCallback } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function Auth() {
  const [tab, setTab] = useState<"login" | "register">("login");
  //   const [email, setEmail] = useState<string>("");
  //   const [username, setUsername] = useState<string>("");
  //   const [password, setPassword] = useState<string>("");

  //   const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //     setEmail(event.target.value);
  //   };

  //   const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
  //     setUsername(event.target.value);
  //   };

  //   const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //     setUsername(event.target.value);
  //   };

  const toggleTab = useCallback(() => {
    setTab((currentTab) => (currentTab === "login" ? "register" : "login"));
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="h-12"
            width={150}
            height={12}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            {tab === "login" ? (
              <LoginForm toggleTab={toggleTab} />
            ) : (
              <RegisterForm toggleTab={toggleTab} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
