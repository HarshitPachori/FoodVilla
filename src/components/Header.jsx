import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">
        <a href="/">FoodVilla</a>
      </h1>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
