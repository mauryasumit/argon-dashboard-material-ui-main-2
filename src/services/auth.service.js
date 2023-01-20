import axios from "axios";
import { Buffer } from "buffer";

const API_URL = "http://localhost:8080/api/auth/";

const ngRockAPi = "https://68f2-122-176-112-241.in.ngrok.io/api/v1/";

const encodedBase64Token = Buffer.from(`${"leadmaster"}:${"leadmaster"}`).toString("base64");
const authorization = `Basic ${encodedBase64Token}`;

const register = (username, email, password) => {
  return axios.post(ngRockAPi + "user/login", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  // const encodedBase64Token = Buffer.from(`${"leadmaster"}:${"leadmaster"}`).toString("base64");
  // const authorization = `Basic ${encodedBase64Token}`;
  return axios
    .post(
      ngRockAPi + "user/login",
      {
        email: username,
        password,
      },
      {
        headers: {
          Authorization: authorization,
        },
      }
    )
    .then((response) => {
      console.log({ response });
      if (response.data.responseData.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.responseData));
      }

      return response.responseData;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
