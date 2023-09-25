import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="flex items-center justify-between p-5 bg-orange-50 sticky top-0 z-10 shadow-md ">
      <h1 className="font-bold tracking-widest text-2xl cursor-pointer ">
        {/* <a href="/">FoodVilla</a> */}
        <Link to="/">FoodVilla</Link>
      </h1>
      <div className="hidden sm:block">
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
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <li className="font-semibold cursor-pointer hover:text-gray-400">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{cartItems}</h1>
      <button className="hover:scale-105 ease-in-out duration-400 sm:hidden">
        <div className="border-b-2 w-5 h-1 border-black"></div>
        <div className="border-b-2 w-5 h-1 border-black"></div>
        <div className="border-b-2 w-5 h-1 border-black"></div>
      </button>
    </nav>
  );
};

export default Header;
