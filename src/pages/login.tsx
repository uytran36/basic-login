import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";

interface IFormLogin {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<IFormLogin>();

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    axios
      .post(`http://${process.env.API_HOST}/auth/login`, data)
      .then((res) => {
        if (res.status === 201) {
          window.localStorage.setItem("userId", res.data.data.userId);
          window.localStorage.setItem("accessToken", res.data.data.accessToken);
          window.localStorage.setItem(
            "refreshToken",
            res.data.data.refreshToken
          );
          Router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Image
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg"
              width={300}
              height={300}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("username")}
                  id="usernam"
                  name="username"
                  autoComplete="username"
                  required
                  className="pl-4 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register("password")}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="pl-4 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
