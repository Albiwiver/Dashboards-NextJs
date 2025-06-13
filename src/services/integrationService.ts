import httpClient from "./http/httpClient";
import { integrationEndpoints } from "./http/endpoints";

export const getIntegration = async () => {
  try {
    const response = await httpClient.get(integrationEndpoints.integration);
    return response.data.data;
  } catch (error) {
    console.error("Error getting integrations", error);
  }
};

export const updateIntegrations = async (
  integration: Record<string, string | boolean>
) => {
  try {
    const response = await httpClient.put(
      `${integrationEndpoints.integration}/${integration.id}`,
      {
        connected: integration.connected,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error posting integration", error);
  }
};
