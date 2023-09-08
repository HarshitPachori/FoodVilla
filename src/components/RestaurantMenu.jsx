import React from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_IMG_URL } from "../constants/AppConstants";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import ShimmerComponent from "./ShimmerComp";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useRestaurantMenuData(resId);

  // Here we are doing an early return to improve our user exprerience
  if (!restaurant) return null;

  return restaurant.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="">
      <div className="flex flex-col items-center   sm:flex-row">
        <img
          className="rounded-b-xl"
          src={CLOUDINARY_IMG_URL + restaurant?.cloudinaryImageId}
          alt=""
        />
        <div className="flex items-center justify-evenly w-full border-gray-200 p-5">
          <div className="">
            <h1 className="font-bold tracking- text-xl">{restaurant?.name}</h1>
            <h3 className="font-thin ">
              {restaurant?.cuisines ? restaurant?.cuisines?.join(", ") : ""}
            </h3>
            <h3 className="font-thin ">
              {restaurant?.areaName} , {restaurant?.sla?.lastMileTravel} km{" "}
            </h3>
          </div>
          <div className="border-gray-200 border-2 rounded-lg p-2 flex flex-col ">
            <h3 className="text-green-700 font-semibold">
              <span className=" items-center text-xl m-1">★</span>
              {restaurant?.avgRatingString}
            </h3>
            <span className="border-b-2 "></span>
            <h3 className="text-sm font-thin">
              {restaurant?.totalRatingsString}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly">
        <h1>Menu</h1>
        <div className="menu w-2/3">
          {menuItems?.map((item) => (
            <MenuItem key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
