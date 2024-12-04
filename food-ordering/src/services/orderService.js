import apiClient from "./api";

// Placing an order
export const placeOrder = (orderData) => {
  return apiClient.post("/orders", orderData); // endpoint based on backend
};

// Fetching all orders (optional)
export const fetchOrders = () => {
  return apiClient.get("/orders"); // endpoint based on backend
};
