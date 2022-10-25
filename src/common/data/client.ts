import axios from "axios";

export const client = axios.create({
  baseURL: `${import.meta.env.VITE_FIREBASE_CORE_SERVICE_URL}`,
});
