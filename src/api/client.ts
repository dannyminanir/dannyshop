import axios from "axios";

// In development, "/api" goes through the Vite proxy to your Render backend.
// When we deploy, we'll set VITE_API_URL instead.
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "/api",
});

// Before every request, attach the saved token (if the user is logged in)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Turns any error into a readable message, e.g. "Invalid email or password"
export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? error.message;
  }
  return "Something went wrong";
};