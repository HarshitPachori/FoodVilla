import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1>OOPS , Something Went Wrong !!</h1>
      <h2>{err.status + " : " + err.statusText + " { " + err.data + " }"}</h2>
    </div>
  );
};

export default ErrorPage;
