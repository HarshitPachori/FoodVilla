import React from "react";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  totalRatingsString,
  lastMileTravelString,
}) => {
  return (
    <div className="restaurant_card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h3>{name}</h3>
      <div className="restaurant_details">
        <h5>{cuisines.join(", ")}</h5>
        <h5>{lastMileTravelString}</h5>
        <h5>{totalRatingsString}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
