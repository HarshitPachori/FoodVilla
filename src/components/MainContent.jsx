import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import NoService from "./NoService";
import ShimmerComp from "./ShimmerComp";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantData from "../utils/useRestaurantData";
import useOnline from "../utils/useOnline";
import UserOffline from "./UserOffline";

const MainContent = () => {
  const [allRestaurants, filterRes, error] = useRestaurantData();
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");

  const searchData = (searchText, restaurants) => {
    if (searchText != "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  const isOnline = useOnline();
  // Here it is early return so as the browser has to diaplay this here
  if (!isOnline || error === "Failed to fetch") return <UserOffline />;

  if (!allRestaurants) return <NoService />;

  return (
    <div className="bg-blue-50">
      <div className="flex items-center justify-center  p-5">
        <input
          type="text"
          className="px-3 py-2 rounded-l-md focus:outline-none w-1/2 sm:w-1/4"
          placeholder="Type Restaurant Name"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="bg-blue-800 text-white px-3 py-2 rounded-r-md w-1/6 sm:w-1/12"
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
        <div className="flex flex-wrap justify-center">
          {(filteredRestaurants === null ? filterRes : filteredRestaurants).map(
            (res) => {
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
            }
          )}
        </div>
      )}
    </div>
  );
};

export default MainContent;
