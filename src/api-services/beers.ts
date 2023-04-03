import { Headers } from "@/types/headersType";
import axios from "axios";
import AxiosInterceptor from "@/utils/AxiosInterceptor";
import { removeLocalStorage } from "@/utils/localStorage";
import Router from "next/router";

type Beer = {
  id: number;
  name: string;
  rating: number;
  price: number;
  image: string;
};

type ParamsPagination = {
  pageSize: number;
  offset: number;
};

AxiosInterceptor(() => {
  removeLocalStorage("accessToken");
  removeLocalStorage("refreshToken");
  removeLocalStorage("userId");
  Router.push("/login");
});

export async function getAllBeers(headers: Headers, params: ParamsPagination) {
  const res = await axios.get(`http://${process.env.API_HOST}/beers`, {
    headers,
    params,
  });
  return res;
}

export async function getBeerById(
  headers: Headers,
  id: string | string[] | undefined
) {
  const res = await axios.get(`http://${process.env.API_HOST}/beers/${id}`, {
    headers,
  });
  return res;
}

export async function updateBeer(
  headers: Headers,
  id: string | string[] | undefined,
  beer: Beer
) {
  const res = await axios.put(
    `http://${process.env.API_HOST}/users/${id}`,
    beer,
    {
      headers,
    }
  );
  return res;
}

export async function addBeerToCart(
  headers: Headers,
  beerId: number,
  userId: number,
  quantity: number
) {
  const res = await axios.post(
    `http://${process.env.API_HOST}/users/cart`,
    { beerId, userId, quantity },
    {
      headers,
    }
  );
  return res;
}
