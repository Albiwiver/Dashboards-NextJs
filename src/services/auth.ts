import axios from "axios";

createUser = async (userData: any) => {
  try {
    const response = await axios.post("/api/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

getUser = async (userId: string) => {
  try {
    const response = await axios.get(`/api/auth/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

forgotPassword = async (email: string) => {
  try {
    const response = await axios.post("/api/auth/forgot-password", { email });
    return response.data;
  } catch (error) {
    console.error("Error in forgot password:", error);
    throw error;
  }
};

resetPassword = async (token: string, newPassword: string) => {
  try {
    const response = await axios.post("/api/auth/reset-password", {
      token,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
