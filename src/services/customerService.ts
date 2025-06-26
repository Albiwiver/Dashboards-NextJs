import httpClient from "./http/httpClient";
import { customerEndpoints } from "./http/endpoints";

export const getCustomers = async () => {
  try {
    const response = await httpClient.get(customerEndpoints.customers);
    return response.data;
  } catch (error) {
    console.error("error fetching customers", error);
  }
};
