import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Order from "./components/Order";
import "./styles.css";

function App() {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (item) => {
    setOrderItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <header>
        <h1>Cafe Delight</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/order">Order</a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToOrder={addToOrder} />} />
        <Route path="/order" element={<Order orderItems={orderItems} />} />
      </Routes>
      <footer>
        <p>&copy; 2024 Cafe Delight</p>
      </footer>
    </Router>
  );
}

export default App;
