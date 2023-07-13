import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  login: any;
};
type FormType = {
  username: string;
  password: string;
};

export default function AdminLogin({ login }: Props) {
  const { register, handleSubmit } = useForm<FormType>();
  async function handleLogin(e: FormType) {
    if (e.username == "admin" && e.password == "admin") {
      login(true);
      console.log("Logging In...");
    }
  }
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="z-50 mb-4">
          <Image
            src="/assets/logo.png"
            alt=""
            width="600"
            height="300"
            className="w-[180px] lg:w-[200px] z-50 bg-white"
          />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to admin console
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("username")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="lisa@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      I am not a robot
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Not an admin?{" "}
                <a
                  href="/contact"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Contact us
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

//eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjg4OTY1MTg1LCJqdGkiOiI2YTJjNDQ5Yy1lZmE5LTRlNjMtYmU1Ny1hMDUwYTFjYzU4YzUiLCJ1c2VyX3V1aWQiOiJlNGEwZGU4ZC0zNTcyLTRhYTctYWU5MC1iOTg3ZjU2MTZlYTgifQ.psQO-a5M7s_uBVDNR92yZV6Y_xK61xdfhoLYh0UFEeF5qq-d0L_PBLbnZ8qpNkt5OekVRbo4NIP2nUyAj1kVZA
