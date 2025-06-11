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

export const uploadCsv = async (formData: FormData) => {
  try {
    const response = await httpClient.options(endpoints.forgotPassword, {
      headers: {
        "Content-type": "multipart/form-data",
      },
      data: formData,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (email: string, password: string) => {
  try {
    const response = await httpClient.post(endpoints.login, {
      email,
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

export const resetPassword = async (token: string, password: string) => {
  try {
    const response = await httpClient.post(endpoints.resetPassword, {
      token,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
