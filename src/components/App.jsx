import React from "react";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import ErrorPage from "./ErrorPage";
import RestaurantMenu from "./RestaurantMenu";
// import ShimmerComp from "./ShimmerComp";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
