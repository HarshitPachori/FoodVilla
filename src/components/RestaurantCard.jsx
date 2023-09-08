import React from "react";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  totalRatingsString,
  lastMileTravelString,
  avgRating,
}) => {
  return (
    <div className=" m-2 w-[300px] hover:scale-95 ease-in-out duration-300">
      <div className="shadow-xl relative rounded-2xl overflow-hidden ">
        <img
          className="relative"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt=""
        />
        <div className=" absolute top-0 bg-gradient-to-t from-black to-transparent to-50% h-full w-full"></div>
      </div>
      <div className="p-2">
        <h3 className="font-bold">{name}</h3>
        <span className="font-semibold">
          <span className="bg-green-700 rounded-full  text-white px-1  items-center m-1">
            ★
          </span>
          {avgRating}
        </span>
        <div className="restaurant_details">
          <h5>{cuisines.join(", ")}</h5>
          <h5>{lastMileTravelString}</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
