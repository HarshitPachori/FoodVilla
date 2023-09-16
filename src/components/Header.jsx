import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-orange-50 sticky top-0 z-10 shadow-md ">
      <h1 className="font-bold tracking-widest text-2xl cursor-pointer ">
        {/* <a href="/">FoodVilla</a> */}
        <Link to="/">FoodVilla</Link>
      </h1>
      <ul className="flex space-x-2 ">
        <li className="font-semibold cursor-pointer hover:text-gray-400">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-gray-400">
          <Link to="/about">About</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-gray-400">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-gray-400">
          <Link to="/">Cart</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-gray-400">
          <Link to="/instamart">Instamart</Link>
        </li>
      </ul>
      <div className="">
        <span className="border-b-black"></span>
        <hr className="border-b-black" />
        <hr className="border-b-black" />
      </div>
    </nav>
  );
};

export default Header;
