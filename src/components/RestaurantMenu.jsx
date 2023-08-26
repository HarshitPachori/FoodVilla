import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantMenuInfo();
  }, []);

  async function getRestaurantMenuInfo() {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.863869&lng=78.0758905&&submitAction=ENTER&restaurantId=" +
        resId
    );
    const json = await response?.json();
    console.log(json);
    const restaurantData = json?.data?.cards
      ?.map((x) => x.card)
      .find(
        (x) =>
          x.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )?.card?.info;
    console.log(restaurantData);
    setRestaurant(restaurantData);
    const data = Object.values(json?.data?.cards);
    console.log(data);
    const restaurantMenuData = json?.data?.cards
      ?.find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
      ?.filter(
        (x) =>
          x["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      ?.map((x) => x.itemCards)
      .flat()
      .map((x) => x.card?.info);

    console.log(restaurantMenuData);
    const uniqueMenuItems = [];
    restaurantMenuData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setMenuItems(uniqueMenuItems);
  }
  return (
    <div className="restaurant_info">
      <div className="res_details">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurant?.cloudinaryImageId
          }
          alt=""
        />
        <h1>{restaurant?.name}</h1>
        <h3>{restaurant?.locality}</h3>
        <h3>{restaurant?.cuisines.join(", ")}</h3>
        <h3>{restaurant?.totalRatingsString}</h3>
        <h3>{restaurant?.avgRatingString}</h3>
      </div>
      <div className="res_menu">
        <h1>Menu</h1>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
