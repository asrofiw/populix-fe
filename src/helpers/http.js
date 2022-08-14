import { default as axios } from "axios";

const { API_BACKEND } = process.env;

const http = (token = false) =>
  axios.create({
    baseURL: API_BACKEND || "http://localhost:8080/",
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

export default http;
