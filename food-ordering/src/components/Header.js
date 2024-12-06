import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Food Ordering App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/menu">Menu</Link> |{" "}
        <Link to="/order">Order</Link>
      </nav>
    </header>
  );
};

export default Header;
