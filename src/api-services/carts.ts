import { Headers } from "@/types/headersType";
import axios from "axios";
import AxiosInterceptor from "@/utils/AxiosInterceptor";
import { removeLocalStorage } from "@/utils/localStorage";
import Router from "next/router";
import { cartItemType } from "@/types/cartItemType";

type Cart = {
  userId?: number;
  beers: {
    beerId: number;
    quantity: number;
  }[];
  isPayed?: boolean;
};

AxiosInterceptor(() => {
  removeLocalStorage("accessToken");
  removeLocalStorage("refreshToken");
  removeLocalStorage("userId");
  Router.push("/login");
});

export async function getCartByUserId(headers: Headers, userId: string | null) {
  const res = await axios.get(
    `http://${process.env.API_HOST}/carts/user/${userId}`,
    {
      headers,
    }
  );
  return res;
}

export async function getCartById(headers: Headers, cartId: string | null) {
  const res = await axios.get(
    `http://${process.env.API_HOST}/carts/${cartId}`,
    {
      headers,
    }
  );
  return res;
}

export async function createCart(headers: Headers, cart: Cart) {
  const res = await axios.post(`http://${process.env.API_HOST}/carts`, cart, {
    headers,
  });
  return res;
}

export async function updateCart(
  headers: Headers,
  cartId: string | null,
  cart: { beerId: number; quantity: number }
) {
  const res = await axios.put(
    `http://${process.env.API_HOST}/carts/${cartId}`,
    cart,
    {
      headers,
    }
  );
  return res;
}

export async function removeItemInCart(
  headers: Headers,
  cartId: string | null,
  beerId: number
) {
  const res = await axios.delete(
    `http://${process.env.API_HOST}/carts/${cartId}`,
    { headers, params: { beerId } }
  );
  return res;
}
