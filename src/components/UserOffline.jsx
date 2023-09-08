import React from "react";
import img from "./offline_img.svg";

const UserOffline = () => {
  return (
    <>
      <div className="offline_div">
        <img src={img} alt="" />
        <h1>Something went wrong. Please check your internet connection !!</h1>
      </div>
    </>
  );
};
export default UserOffline;
