import Layout from "@/layout/default";
import React, { useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { getUserById, updateUser } from "@/api-services/users";
import useHeaders from "@/hooks/useHeaders";

interface IFormUpdate {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
}

const UserDetail: NextPageWithLayout = () => {
  const { register, handleSubmit, setValue } = useForm<IFormUpdate>();
  const router = useRouter();
  const { id } = router.query;
  const headers = useHeaders();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserById(headers, id);

        setValue("firstName", result?.data?.data?.firstName);
        setValue("lastName", result?.data?.data?.lastName);
        setValue("email", result?.data?.data?.email);
        setValue("phoneNumber", result?.data?.data?.phoneNumber);
        setValue("username", result?.data?.data?.username);
      } catch (e) {
        console.log({ e });
      }
    };
    fetchData();
  }, [headers, id, setValue]);

  const onSubmit: SubmitHandler<IFormUpdate> = async (data) => {
    try {
      const res = await updateUser(headers, id, data);
      if(res.status === 200) {
        router.push("/users");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-1/2 m-auto py-10 ">
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-hidden ">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <input
                    {...register("firstName")}
                    type="text"
                    name="firstName"
                    id="firstName"
                    // defaultValue={user?.firstName}
                    autoComplete="given-name"
                    className="px-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    {...register("lastName")}
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    // defaultValue={user?.lastName}
                    className="px-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    // defaultValue={user?.email}
                    className="px-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    {...register("username")}
                    id="username"
                    name="username"
                    autoComplete="username"
                    // defaultValue={user?.username}
                    className="px-2 mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phoneNumber")}
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="phoneNumber"
                    // defaultValue={user?.phoneNumber}
                    className="px-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

UserDetail.getLayout = (page) => <Layout tabActive="List Users">{page}</Layout>;

export default UserDetail;
