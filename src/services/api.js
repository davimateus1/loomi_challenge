import axios from "axios";
import { BaseURL } from "../assets/utils/BaseURL";

const api = axios.create({
  baseURL: BaseURL,
});

export default api;
