import React from "react";

function Menu({ addToOrder }) {
  const menuItems = [
    {
      name: "Pizza",
      image: "/images/pizza.jpg",
      price: "$12.99",
      description: "Freshly baked with your favorite toppings.",
    },
    {
      name: "Burgers",
      image: "/images/burger.jpg",
      price: "$9.99",
      description: "Juicy, flavorful & cooked to perfection.",
    },
    {
      name: "Baked Goods",
      image: "/images/baked-goods.jpg",
      price: "$4.99",
      description: "Delicious assorted pastries and breads.",
    },
    {
      name: "Coffee & Tea",
      image: "/images/coffee-tea.jpg",
      price: "$2.99",
      description: "A perfect complement to your meal.",
    },
  ];

  return (
    <main>
      <section className="menu">
        <h2>Our Delicious Offerings</h2>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="menu-price">{item.price}</p>
              <button onClick={() => addToOrder(item)}>Add to Order</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Menu;
