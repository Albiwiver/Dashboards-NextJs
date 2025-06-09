import { User } from "@/store/userStore";
import endpoints from "./http/endpoints";
import httpClient from "./http/httpClient";

export const createUser = async (user: User) => {
  try {
    const response = await httpClient.post(endpoints.register, user);
    return response.data.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUser = async (userName: string, password: string) => {
  try {
    const response = await httpClient.post(endpoints.login, {
      userName,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await httpClient.post(endpoints.forgotPassword, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error in forgot password:", error);
    throw error;
  }
};

export const resetPassword = async (token: string, newPassword: string) => {
  try {
    const response = await httpClient.post(endpoints.resetPassword, {
      token,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
