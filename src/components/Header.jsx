import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav_container">
      <div className="header">
        <h1 className="logo">
          {/* <a href="/">FoodVilla</a> */}
          <Link to="/">FoodVilla</Link>
        </h1>
        <div className="nav_items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
