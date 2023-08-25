import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body1 from "./components/Body1";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  );
};

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
    element: <App />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
          {
            path: "/",
            element: <Body />,
          },
          {
            path: "/about",
            element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/grocery",
            element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                <Grocery />
              </Suspense>
            ),
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
