import { api } from "./client";
import type { AuthResponse } from "../types";

export const loginRequest = async (email: string, password: string) => {
  const response = await api.post<AuthResponse>("/auth/login", { email, password });
  return response.data;
};

export const registerRequest = async (name: string, email: string, password: string) => {
  const response = await api.post<AuthResponse>("/auth/register", { name, email, password });
  return response.data;
};

export const logoutRequest = async () => {
  await api.post("/auth/logout");
};