import axios from "axios";

const axiosServices = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 50000,
});

axiosServices.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosServices;
