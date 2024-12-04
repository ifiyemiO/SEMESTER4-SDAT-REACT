import React, { useEffect, useState } from "react";
import { fetchFoodItems } from "../services/foodService";

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchFoodItems()
      .then((response) => setFoodItems(response.data))
      .catch((err) => setError("Failed to fetch food items."));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Available Food Items</h1>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
