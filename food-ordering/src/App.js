import React from "react";
import FoodList from "./components/FoodList";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";

function App() {
  return (
    <div className="App">
      <FoodList />
      <OrderForm />
      <OrderList />
    </div>
  );
}

export default App;
