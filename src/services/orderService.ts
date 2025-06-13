import { orderEndpoints } from "./http/endpoints";
import httpClient from "./http/httpClient";

export const uploadCsv = async (formData: FormData) => {
  try {
    const response = await httpClient.post(orderEndpoints.uploadOrderCsv, {
      headers: {
        "Content-type": "multipart/form-data",
      },
      data: formData,
    });

    return response.data;
  } catch (error) {
    console.error("error posting csv", error);
  }
};

export const getOrders = async () => {
  try {
    const response = await httpClient.get(orderEndpoints.orders);
    return response.data;
  } catch (error) {
    console.error("error fetching orders", error);
  }
};

export const getOrderDetail = async () => {
  try {
    const response = await httpClient.get(orderEndpoints.orderDetails);
    return response.data;
  } catch (error) {
    console.error("error fetching order details", error);
  }
};
