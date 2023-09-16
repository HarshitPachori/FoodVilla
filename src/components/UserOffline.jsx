import React from "react";
import img from "./offline_img.svg";

const UserOffline = () => {
  return (
    <>
      <div className="text-2xl font-semibold p-5 flex flex-col justify-center items-center">
        <img src={img} alt="" className="h-[70%]  sm:w-1/2 sm:h-[400px]" />
        <h1>Something went wrong. Please check your internet connection !!</h1>
      </div>
    </>
  );
};
export default UserOffline;
