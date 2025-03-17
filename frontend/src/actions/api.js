import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8888/api",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo?.token) {
      config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       console.log("Session expired. Logging out...");
//       localStorage.removeItem("userInfo");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
