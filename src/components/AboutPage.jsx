import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/custom_contexts/UserContext";
// import ProfileFunction from "./ProfileFunction";
// import ProfileClass from "./ProfileClass";

const AboutPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Outlet />
      {/* <ProfileFunction name={"Harshit Pachori"} location={"Aligarh"} /> */}
      {/* <ProfileClass name={"Harshit Pachori"} location={"Aligarh"} /> */}
      <h1>About us page</h1>
      <span className="text-black font-semibold p-5">
        {user.name} - {user.email}
      </span>
      <h3>This is about us pae of our swiggy clone foodVillla application</h3>
    </div>
  );
};

export default AboutPage;
