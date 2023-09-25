import React from "react";
import { CLOUDINARY_IMG_URL } from "../constants/AppConstants";

const MenuItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center m-5  w-full space-x-5 ">
      <div className="">
        <h1 className="font-semibold text-sm sm:text-xl">{item?.name}</h1>
        <h1 className="text-sm">
          ₹
          {item?.price != undefined
            ? item?.price / 100
            : item?.defaultPrice / 100}
        </h1>
        <h1 className="font-light hidden sm:block text-xs w-2/3">
          {item?.description}
        </h1>
        {item?.variantsV2.variantGroups?.map((qty) =>
          // qty?.variation?.map((a) => console.log(a?.name))
          console.log("")
        )}
      </div>
      <div className="flex justify-center  max-w-[150px]  relative ">
        <img
          className="w-full h-full rounded-lg"
          src={
            item?.imageId === undefined
              ? "https://wallpaperaccess.com/full/3025528.jpg"
              : CLOUDINARY_IMG_URL + item?.imageId
          }
          alt=""
        />
        <button className="bg-green-300  px-2 rounded-md shadow-md absolute -bottom-[10px] hover:scale-110 ease-in-out duration-300">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
