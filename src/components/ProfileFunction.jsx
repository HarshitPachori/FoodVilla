import React, { useEffect, useState } from "react";

const Profile = (props) => {
  // creating states using use state hook
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {}); // called for every render
  useEffect(() => {}, []); // called only one time
  useEffect(() => {}, [count]); // called whenever there is change in state for variable count
  useEffect(() => {}, [count2]); // called whenever there is change in state for variable count
  return (
    <>
      <div>
        <p>profile function based</p>
        <h1>Name : {props.name}</h1>
        <h1>Location : {props.location}</h1>
        <h3>{count}</h3>
        <button onClick={() => setCount(1)}>set Count</button>
      </div>
    </>
  );
};

export default Profile;
