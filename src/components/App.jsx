import React, { Suspense, lazy, useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import MainContent from "./MainContent";
// import ContactPage from "./ContactPage";
// import AboutPage from "./AboutPage";
import ErrorPage from "./ErrorPage";
// import RestaurantMenu from "./RestaurantMenu";
import Profile from "./ProfileFunction";
import InstaMart from "./InstaMart";
import Cart from "./Cart";
import UserContext from "../utils/custom_contexts/UserContext";
import { Provider } from "react-redux";
import store from "../utils/store";
// import ShimmerComp from "./ShimmerComp";
const AboutPage = lazy(() => import("./AboutPage.jsx"));
const MainContent = lazy(() => import("./MainContent.jsx"));
const ContactPage = lazy(() => import("./ContactPage.jsx"));
const RestaurantMenu = lazy(() => import("./RestaurantMenu.jsx"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Dummy",
    email: "dummy@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
        path: "/instamart",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <InstaMart />
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
        path: "/cart",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <Cart />
          </Suspense>
        ),
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
