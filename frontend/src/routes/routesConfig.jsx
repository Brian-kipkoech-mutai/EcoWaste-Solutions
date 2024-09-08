import ServiceContainer from "@/containers/ServiceContainer";
import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";

import Root from "@/pages/Root";
import Testimonilas from "@/pages/Testimonilas";
import { AnimatePresence } from "framer-motion";
import React, { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";

function RoutesConfig(props) {
  const routes = useRoutes([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "services/:serviceName",
          element: <ServiceContainer />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "testimonials",
          element: <Testimonilas />,
        },
        {
          path: "pricing-table",
          element: <Pricing />,
        },
        {
          path: "*",
          element: <h1>Page not found</h1>, // This will be shown when no matching route is found.
        },
      ],
    },
  ]);

  return (
    <AnimatePresence mode="wait " initial={false}>
      {cloneElement(routes, { key: useLocation().pathname })}
    </AnimatePresence>
  );
}

export default RoutesConfig;
