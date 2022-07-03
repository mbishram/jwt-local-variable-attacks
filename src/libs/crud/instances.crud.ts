import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const CATS_BASE_URL = process.env.NEXT_PUBLIC_CAT_BASE_URL;

const httpInstance = axios.create({ baseURL: BASE_URL });

const catsHTTPInstance = axios.create({ baseURL: CATS_BASE_URL });
catsHTTPInstance.interceptors.request.use((request) => {
  if (request?.headers) {
    request.headers["x-api-key"] = process.env.NEXT_PUBLIC_CAT_API_KEY || "";
  }
  return request;
});

export { httpInstance, catsHTTPInstance };
