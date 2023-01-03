import Axios from "axios";
import dotenv from "dotenv";

const baseURL = import.meta.env.VITE_BASE_SERVER_URL;

export default Axios.create({
  baseURL,
});
