import React, { useEffect, useState } from "react";
import { fetchOrders } from "../services/orderService";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders()
      .then((response) => setOrders(response.data))
      .catch((err) => setError("Failed to fetch orders."));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Customer Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customerName} - Items: {order.foodItems.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
