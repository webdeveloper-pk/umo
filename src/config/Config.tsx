import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preloader from "../components/preLoader/PreLoader";

const Homepage = lazy(() => import("../pages/Homepage"));
const SalesCode = lazy(() => import("../pages/SalesCode"));
const SlectCity = lazy(() => import("../pages/SelectCity"));
const InfoStepper = lazy(() => import("../pages/infoStepper"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  // {
  //   path: "sales-code",
  //   element: <SalesCode />,
  // },
  {
    path: "select-city",
    element: <SlectCity />,
  },
  {
    path: "info",
    element: <InfoStepper />,
  },
]);

const Config = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default Config;
