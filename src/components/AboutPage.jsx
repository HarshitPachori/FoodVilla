import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/custom_contexts/UserContext";
// import ProfileFunction from "./ProfileFunction";
import ProfileClass from "./ProfileClass";

const AboutPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Outlet />
      {/* <ProfileFunction name={"Harshit Pachori"} location={"Aligarh"} /> */}
      <ProfileClass name={"Harshit Pachori"} location={"Aligarh"} />

      <h1>About us page</h1>
      <input
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
        className="border ring-1  ring-slate-300 px-2"
      />
      <input
        value={user.email}
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value,
          })
        }
        className="border ring-1  ring-slate-300 px-2"
      />
      <span className="text-black font-semibold p-5">
        {user.name} - {user.email}
      </span>
      <h3>This is about us page of our swiggy clone foodVilla application</h3>
    </div>
  );
};

export default AboutPage;
