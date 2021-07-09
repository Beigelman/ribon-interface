import Axios from "axios";

const RIBON_API = "https://us-central1-ribon-dapp.cloudfunctions.net/api";

export const baseURL = RIBON_API;

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

export default api;
