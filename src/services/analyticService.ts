import httpClient from "./http/httpClient";
import { analyticEndpoints } from "./http/endpoints";

export const getNetIncome = async () => {
  try {
    const response = await httpClient.get(`${analyticEndpoints.netIncome}`);
    return response.data;
  } catch (error) {
    console.error("error fetching net income", error);
  }
};

export const getTotalOrders = async () => {
  try {
  } catch (error) {
    console.error("error fetching total orders", error);
  }
};

export const getAverageSales = async () => {
  try {
  } catch (error) {
    console.error("error fetching average sales", error);
  }
};

export const getCanceledOrders = async () => {
  try {
  } catch (error) {
    console.error("error fetching canceled orders", error);
  }
};

export const getOrders = async () => {
  try {
  } catch (error) {
    console.error("error fetching orders", error);
  }
};
