import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
export const getData = async (url) =>
  await axiosClient
    .get(url)
    .then((response) => response.data)
    .catch((err) => {
      return new Error(err);
    });

export const postData = async (url, body) =>
  await axiosClient
    .post(url, body)
    .then((response) => response.data)
    .catch((err) => {
      return new Error(err);
    });
