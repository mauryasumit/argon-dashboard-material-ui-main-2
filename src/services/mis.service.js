import axios from "axios";
import { Buffer } from "buffer";

const encodedBase64Token = Buffer.from(`${"leadmaster"}:${"leadmaster"}`).toString("base64");
const authorization = `Basic ${encodedBase64Token}`;

const API_URL = "http://localhost:8080/api/test/";
const ngRockAPi = "http://192.168.8.102:5002/api/v1/";

const user = JSON.parse(localStorage.getItem("user"));

// if(user)
let { accessToken } = user
  ? user
  : {
      accessToken: "",
    };

console.log(accessToken);

const getMis = (page, limit) => {
  try {
    return axios.get(ngRockAPi + `mis/getMisList?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: authorization,
        AccessToken: accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getMis,
};
