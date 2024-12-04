import React, { useState } from "react";
import { placeOrder } from "../services/orderService";

const OrderForm = () => {
  const [order, setOrder] = useState({ customerName: "", foodItems: [] });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(order)
      .then(() => {
        setMessage("Order placed successfully!");
        setOrder({ customerName: "", foodItems: [] }); // Reset form
      })
      .catch(() => setMessage("Failed to place order."));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Place an Order</h1>
      <label>
        Name:
        <input
          type="text"
          value={order.customerName}
          onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
          required
        />
      </label>
      <p>
        <label>
          Food Items (comma-separated IDs):
          <input
            type="text"
            value={order.foodItems}
            onChange={(e) =>
              setOrder({
                ...order,
                foodItems: e.target.value.split(",").map((id) => id.trim()),
              })
            }
            required
          />
        </label>
      </p>
      <p>
        <button type="submit">Submit Order</button>
      </p>

      {message && <div>{message}</div>}
    </form>
  );
};

export default OrderForm;
