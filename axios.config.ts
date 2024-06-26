import axios from "axios";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";

const Axios = axios.create();

Axios.defaults.baseURL = process.env.API_URL;
Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.post["Accept"] = "application/json";

// Add Authorization header in all requests
Axios.interceptors.request.use(
  (config) => {
    if (hasCookie("iconic-fe-token")) {
      config.headers["Authorization"] = getCookie("iconic-fe-token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Extract error response
Axios.interceptors.response.use(
  (f) => f,
  async (error) => {
    return Promise.reject({
      ...error,
      data: error.response?.data,
    });
  },
);

export default Axios;
