import endpoints from "./http/endpoints";
import httpClient from "./http/httpClient";

export const uploadCsv = async (formData: FormData) => {
  try {
    const response = await httpClient.options(endpoints.uploadCsv, {
      headers: {
        "Content-type": "multipart/form-data",
      },
      data: formData,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
