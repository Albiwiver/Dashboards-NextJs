export const authEndpoints = {
  register: "/auth/register",
  login: "/auth/login",
  forgotPassword: "/auth/forgot-password",
  resetPassword: "/auth/reset-password",
  uploadCsv: "/orders/upload-csv",
};

export const analyticEndpoints = {
  netIncome: "/analytics/net-income",
  totalOrders: "/analytics/total-orders",
  avgSales: "/analytics/average-sales",
  canceledOrders: "/analytics/canceled-orders",
};

export const integrationEndpoints = {
  integration: "/integrations",
};

export const orderEndpoints = {
  orders: "/orders",
  orderDetails: "/orders/:id",
  uploadOrderCsv: "/orders/upload-csv",
};
