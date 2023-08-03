import axios from "axios";
import { CampType } from "types/type";

const baseURL = axios.create({
  //env postman
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const getCampsType = async (type: CampType) => {
  return await baseURL
    .get(`/camps?type=${type}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.error(err);
    });
};

export const getCamp = async (id: number) => {
  return await baseURL
    .get(`/camps/${id}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.error(err);
    });
};
