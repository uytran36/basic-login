import { getAccessToken } from "@/api-services/auth";
import axios, { AxiosError, AxiosResponse } from "axios";
import { getLocalStorage, setLocalStorage } from "./localStorage";

// hàm để refresh token
const refreshToken = async (error: AxiosError, logout: Function) => {
  const refreshToken = getLocalStorage("refreshToken");
  if (!refreshToken) {
    logout();
    return;
  }
  try {
    const { data } = await getAccessToken(refreshToken);
    setLocalStorage({
      key: "accessToken",
      value: data.data.accessToken,
    });
    setLocalStorage({
      key: "refreshToken",
      value: data.data.refreshToken,
    });
    const config = error.config;
    if (config) {
      config.headers["Authorization"] = `Bearer ${data.data.accessToken}`;
    }
    return axios.request(config || {});
  } catch (error) {
    logout();
    return;
  }
};

export default function AxiosInterceptor(onUnauthenticated: Function) {
  const onResponseSuccess = (response: AxiosResponse) => {
    return response;
  };
  const onResponseError = (error: AxiosError) => {
    if (error.response?.status !== 401) {
      const errMessage = error.response?.data || error?.response || error;
      return Promise.reject(errMessage);
    }
    return refreshToken(error, onUnauthenticated);
  };
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
}
