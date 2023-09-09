import { useEffect, useState } from "react";
import { FETCH_RES_URL } from "../../constants/AppConstants";

const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    try {
      const data = await fetch(FETCH_RES_URL);
      if (!data.ok) {
        const err = data.status;
        console.log(err);
        throw new Error(err);
      } else {
        const response = await data?.json();
        console.log(response);
        async function checkResponseData(resPonseData) {
          for (let i = 0; i < resPonseData?.data?.cards.length; i++) {
            const checkData =
              resPonseData?.data?.cards[i]?.card?.card?.gridElements
                ?.infoWithStyle?.restaurants;
            if (checkData != undefined) {
              return checkData;
            }
          }
        }
        const resData = await checkResponseData(response);
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }
  return [allRestaurants, filteredRestaurants, error];
};

export default useRestaurantData;
