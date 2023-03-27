import axios from "axios";

export async function getAccessToken(refreshToken: string) {
  const res = await axios.post(
    `http://${process.env.API_HOST}/auth/refresh-token`,
    {
      refreshToken,
    }
  );
  return res;
}
