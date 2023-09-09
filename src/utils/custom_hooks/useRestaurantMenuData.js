import { useEffect, useState } from "react";
import {
  FETCH_RES_MENU_URL,
  ITEM_CATEGORY_STRING,
  RESTAURANT_STRING,
} from "../../constants/AppConstants";

const useRestaurantMenuData = (resId) => {
  const [restaurant, setRestaurant] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantMenuInfo();
  }, []);

  async function getRestaurantMenuInfo() {
    try {
      const response = await fetch(FETCH_RES_MENU_URL + resId);
      const json = await response?.json();
      console.log(json);
      const restaurantData = json?.data?.cards
        ?.map((x) => x.card)
        .find((x) => x.card["@type"] === RESTAURANT_STRING)?.card?.info;
      console.log(restaurantData);
      setRestaurant(restaurantData);
      const data = Object.values(json?.data?.cards);
      console.log(data);
      const restaurantMenuData = json?.data?.cards
        ?.find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] === ITEM_CATEGORY_STRING)
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
    } catch (err) {
      console.log(err.message);
    }
  }
  return [restaurant, menuItems];
};

export default useRestaurantMenuData;
