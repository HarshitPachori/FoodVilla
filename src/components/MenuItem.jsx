import React from "react";
import { CLOUDINARY_IMG_URL } from "../constants/AppConstants";

const MenuItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center m-5  w-full space-x-5 ">
      <div className="">
        <h1 className="font-semibold text-xl">{item?.name}</h1>
        <h1 className="text-sm">₹{item?.price / 100}</h1>
        <h1 className="font-light hidden sm:block text-xs w-2/3">{item?.description}</h1>
      </div>
      <img
        className="w-[118px] h-[96px] rounded-lg "
        src={CLOUDINARY_IMG_URL + item?.imageId}
        alt=""
      />
    </div>
  );
};

export default MenuItem;
