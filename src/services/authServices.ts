import { User } from "@/store/userStore";
import { authEndpoints } from "./http/endpoints";
import httpClient from "./http/httpClient";
import { ForgotPasswordDTO } from "@/types/authType";

export const createUser = async (user: User) => {
  try {
    const response = await httpClient.post(authEndpoints.register, user);
    return response.data.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUser = async (email: string, password: string) => {
  try {
    const response = await httpClient.post(authEndpoints.login, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const forgotPassword = async (
  email: string
): Promise<ForgotPasswordDTO> => {
  try {
    const response = await httpClient.post(authEndpoints.forgotPassword, {
      email,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error in forgot password:", error);
    throw error;
  }
};

export const resetPassword = async (token: string, password: string) => {
  try {
    const response = await httpClient.post(authEndpoints.resetPassword, {
      token,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
