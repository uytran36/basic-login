import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phoneNumber: string;
}

export default function Signup() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.password !== data.confirmPassword) {
      return;
    }

    delete data.confirmPassword;

    axios
      .post(`http://${process.env.API_HOST}/users`, data)
      .then((res) => {
        Router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      
      <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sign Up
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  {...register("firstName")}
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  {...register("lastName")}
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2.5">
                <input
                  {...register("username")}
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="relative mt-2.5">
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-2 px-3.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="relative mt-2.5">
                <input
                  {...register("confirmPassword")}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-2 px-3.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  {...register("phoneNumber")}
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-2 px-3.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 text-sm leading-6 text-gray-600">
              <span>If you already have an account, please </span>
              <Link href="/login" className="font-semibold text-indigo-600">
                sign&nbsp;in
              </Link>
              .
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
