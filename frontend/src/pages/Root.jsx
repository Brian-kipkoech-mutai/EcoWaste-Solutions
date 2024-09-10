import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FormContextProvider from "@/context/pickupFormContext";
import React from "react";
import { Outlet } from "react-router-dom";

function Root(props) {
  return (
    <div className="text-gray-800 overflow-hidden">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Root;
