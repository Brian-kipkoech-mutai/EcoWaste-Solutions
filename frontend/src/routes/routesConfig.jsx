import Root from "@/pages/Root";
import { AnimatePresence } from "framer-motion";
import React, { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";
  

function RoutesConfig(props) {
  const routes = useRoutes([{ path: "/", element: <Root />, children: [] }]);

  return (
    <AnimatePresence mode="wait " initial={false}>
      {cloneElement(routes, { key: useLocation().pathname })}
    </AnimatePresence>
  );


}

export default RoutesConfig;
