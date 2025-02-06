import axios from "axios";
import { getCookie, createNewCookie, deleteCookie } from "../Cookies/Cookie";

const instance = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "http://10.6.1.123:8000/api",
  // baseURL: "https://techwavewriters.pythonanywhere.com/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${getCookie("access_token")}`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5MTA2NDI1LCJpYXQiOjE3Mzg3NTk5MjUsImp0aSI6IjY4OGQyNzVmYjAyNzQ3MWY4MDg2MzdmMjdhN2RiZDI4IiwidXNlcl9pZCI6M30.E2cey_tiM2KhELqcioV30TcSJYqv9Gl_OJ6CO0LE_JQ`,
  },
});

// Request Interceptor: Attach access token to every request
// instance.interceptors.request.use(
//   (config) => {
//     const accessToken = getCookie("access_token");
//     if (accessToken) {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response Interceptor: Handle 401 errors (token expiration)
// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = getCookie("refresh_token");
//         if (!refreshToken) {
//           // If no refresh token is available, redirect to login
//           window.location.href = "/login";
//           return Promise.reject(error);
//         }

//         const response = await instance.post("/auth/token/refresh/", {
//           refresh: refreshToken,
//         });

//         const newAccessToken = response.data.access;
//         const newRefreshToken = response.data.refresh;

// Store new tokens
//         createNewCookie("access_token", newAccessToken, 1); // Example with 1-day expiry
//         createNewCookie("refresh_token", newRefreshToken, 7); // Example with 7-day expiry

//         // Update Authorization header for the original request
//         instance.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${newAccessToken}`;
//         originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

//         // Retry the original request with the new token
//         return instance(originalRequest);
//       } catch (refreshError) {
//         console.log(
//           "Refresh token is expired or invalid, redirecting to login."
//         );
//         // Optionally, clear tokens from storage
//         deleteCookie("access_token");
//         deleteCookie("refresh_token");
//         // Redirect to login
//         window.location.href = "/login";
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
export default instance;
