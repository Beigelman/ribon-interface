import Axios from "axios";
import camelCaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";

const RIBON_API = "http://localhost:3001";

export const baseURL = process.env.REACT_APP_RIBON_API || RIBON_API;

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

export default api;
