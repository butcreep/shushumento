import axios from "axios";
import { CampType } from "types/type";

const baseURL = axios.create({
  baseURL: "https://2f3e8928-b7bb-429b-b2da-b7022f928e09.mock.pstmn.io",
});

export const getCampsType = async (type: CampType) => {
  return await baseURL
    .get(`/camps?type=${type}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.error(err);
    });
};

export const getCamp = async (campId: number) => {
  return await baseURL
    .get(`/camps/${campId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.error(err);
    });
};
