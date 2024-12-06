import React from "react";

function Home() {
  return (
    <main>
      <section>
        <h2>Welcome to our Amazing Cafe </h2>
        <p>Discover a variety of delicious food items and order with ease.</p>
        <div className="buttons">
          <a href="/menu" className="button">
            View Menu
          </a>
          <a href="/order" className="button">
            Place Order
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
