import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunction from "./ProfileFunction";
import ProfileClass from "./ProfileClass";

const AboutPage = () => {
  return (
    <div>
      <Outlet/>
      <ProfileFunction name={"Harshit Pachori"} location={"Aligarh"} />
      {/* <ProfileClass name={"Harshit Pachori"} location={"Aligarh"} /> */}
      <h1>About us page</h1>
      <h3>This is about us pae of our swiggy clone foodVillla application</h3>
    </div>
  );
};

export default AboutPage;
