import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://randomuser.me/api/",
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
