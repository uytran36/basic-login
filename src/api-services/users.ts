import { Headers } from "@/types/headersType";
import axios from "axios";
import AxiosInterceptor from "@/utils/AxiosInterceptor";
import { removeLocalStorage } from "@/utils/localStorage";
import Router from "next/router";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phoneNumber: string;
};

AxiosInterceptor(() => {
  removeLocalStorage("accessToken");
  removeLocalStorage("refreshToken");
  removeLocalStorage("userId");
  Router.push("/login");
});

export async function getAllUsers(headers: Headers) {
  const res = await axios.get(`http://${process.env.API_HOST}/users`, {
    headers,
  });
  return res;
}

export async function getUserById(
  headers: Headers,
  id: string | string[] | undefined
) {
  const res = await axios.get(`http://${process.env.API_HOST}/users/${id}`, {
    headers,
  });
  return res;
}

export async function updateUser(
  headers: Headers,
  id: string | string[] | undefined,
  user: User
) {
  const res = await axios.put(
    `http://${process.env.API_HOST}/users/${id}`,
    user,
    {
      headers,
    }
  );
  return res;
}
