import axios from 'axios';
import { useAuthStore } from "@/store/use-auth";

const BASE_URL = "https://ai-pulse-backend.onrender.com/api/v1";
// const BASE_URL = "http://localhost:8080/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest, "original request")
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const authStore = useAuthStore.getState();
      
      // Check if the user is logged in before attempting to refresh the token
      if (authStore.isLoggedIn()) {
        try {
          await authStore.refreshToken();
          return api(originalRequest);
        } catch (refreshError) {
          // If refresh fails, logout the user
          await authStore.logout();
          throw refreshError;
        }
      } else {
        // User is not logged in, so don't attempt to refresh
        throw error;
      }
    }
    return Promise.reject(error);
  }
);

export default api;