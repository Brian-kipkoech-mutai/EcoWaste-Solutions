
import Home from "@/pages/Home";
import Root from "@/pages/Root";
import { AnimatePresence } from "framer-motion";
import React, { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";
  

function RoutesConfig(props) {
  const routes = useRoutes([{
    path: "/", element: <Root />, children: [
    {
    path: "", element:<Home/>, 
  }] }]);

  return (
    <AnimatePresence mode="wait " initial={false}>
      {cloneElement(routes, { key: useLocation().pathname })}
    </AnimatePresence>
  );


}

export default RoutesConfig;
