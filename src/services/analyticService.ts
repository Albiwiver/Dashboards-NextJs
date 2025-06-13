import httpClient from "./http/httpClient";
import { analyticEndpoints } from "./http/endpoints";
import { AnalyticParams } from "@/types/analyticTypes";

export const getNetIncome = async (queryParams: AnalyticParams) => {
  const params = new URLSearchParams(queryParams);
  try {
    const response = await httpClient.get(
      `${analyticEndpoints.netIncome}?${params}`
    );
    return response.data;
  } catch (error) {
    console.error("error fetching net income", error);
  }
};

export const getTotalOrders = async (queryParams: AnalyticParams) => {
  const params = new URLSearchParams(queryParams);
  try {
    const response = await httpClient.get(
      `${analyticEndpoints.totalOrders}?${params}`
    );
    return response.data;
  } catch (error) {
    console.error("error fetching total orders", error);
  }
};

export const getAverageSales = async (queryParams: AnalyticParams) => {
  const params = new URLSearchParams(queryParams);
  try {
    const response = await httpClient.get(
      `${analyticEndpoints.avgSales}?${params}`
    );
    return response.data;
  } catch (error) {
    console.error("error fetching average sales", error);
  }
};

export const getCanceledOrders = async (queryParams: AnalyticParams) => {
  const params = new URLSearchParams(queryParams);
  try {
    const response = await httpClient.get(
      `${analyticEndpoints.canceledOrders}?${params}`
    );
    return response.data;
  } catch (error) {
    console.error("error fetching canceled orders", error);
  }
};
