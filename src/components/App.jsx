import React, { Suspense, lazy } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import MainContent from "./MainContent";
// import ContactPage from "./ContactPage";
// import AboutPage from "./AboutPage";
import ErrorPage from "./ErrorPage";
// import RestaurantMenu from "./RestaurantMenu";
import Profile from "./ProfileFunction";
// import ShimmerComp from "./ShimmerComp";
const AboutPage = lazy(() => import("./AboutPage.jsx"));
const MainContent = lazy(() => import("./MainContent.jsx"));
const ContactPage = lazy(() => import("./ContactPage.jsx"));
const RestaurantMenu = lazy(() => import("./RestaurantMenu.jsx"));

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
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <MainContent />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <AboutPage />
          </Suspense>
        ),
        children: [{ path: "profile", element: <Profile /> }],
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
