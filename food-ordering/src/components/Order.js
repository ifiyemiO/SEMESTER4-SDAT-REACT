import React from "react";

function Order({ orderItems }) {
  return (
    <main>
      <section>
        <h2>Your Order</h2>
        {orderItems.length === 0 ? (
          <p>No items in your order yet.</p>
        ) : (
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        )}
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="orderDetails">Order Details:</label>
          <textarea
            id="orderDetails"
            name="orderDetails"
            rows="5"
            value={orderItems
              .map((item) => `${item.name} - ${item.price}`)
              .join(", ")}
            readOnly
          ></textarea>
          <br />
          <button type="submit">Submit Order</button>
        </form>
      </section>
    </main>
  );
}

export default Order;
