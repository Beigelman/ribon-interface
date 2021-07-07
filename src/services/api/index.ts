import Axios from "axios";

const RIBON_API = "https://us-central1-ribon-dapp.cloudfunctions.net";

export const baseURL = process.env.REACT_APP_RIBON_API || RIBON_API;

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

export default api;
