import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import NoService from "./NoService";
import ShimmerComp from "./ShimmerComp";
import { Link } from "react-router-dom";

function filterData(searchTxt, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filteredData;
}

const MainContent = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.863869&lng=78.0758905&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const response = await data?.json();
    console.log(response);

    async function checkResponseData(resPonseData) {
      for (let i = 0; i < resPonseData?.data?.cards.length; i++) {
        const checkData =
          resPonseData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        if (checkData != undefined) {
          return checkData;
        }
      }
    }
    const resData = await checkResponseData(response);
    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
  }

  const searchData = (searchText, restaurants) => {
    if (searchText != "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };
  if (!allRestaurants) return <NoService />;
  return (
    <div className="homePage">
      <div className="search_box">
        <input
          type="text"
          placeholder="Type Restaurant Name"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          onClick={() => {
            searchData(searchTxt, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <ShimmerComp />
      ) : (
        <div className="restaurants">
          {filteredRestaurants.map((res) => {
            return (
              // <RestaurantCard
              //   name={res.data.name}
              //   cuisines={res.data.cuisines}
              //   image={res.data.cloudinaryImageId}
              //   lastmileDistanceString={res.data.lastMileTravelString}
              //   rating={res.data.totalRatingsString}
              //   key={res.data.id}
              // />
              // <RestaurantCard {...res?.info} key={res?.info?.id} /> // using spread operator
              <Link to={"/restaurant/" + res?.info?.id} key={res?.info?.id}>
                <RestaurantCard {...res?.info} />
              </Link> // using spread operator
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MainContent;
