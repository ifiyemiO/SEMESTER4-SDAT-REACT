import apiClient from "./api";

// Fetching all food items
export const fetchFoodItems = () => {
  return apiClient.get("/food-items"); // endpoint based on backend
};
