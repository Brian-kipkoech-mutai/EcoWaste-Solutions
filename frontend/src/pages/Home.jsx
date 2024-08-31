import Hero from "@/pages/hero";
import HomeService from "@/components/HomeService";
import React from "react";
import HomeAboutUs from "@/components/HomeAboutUs";
import Statistics from "@/components/statistics";
import ChooseUs from "@/components/chooseUs";
import Testimonials from "@/components/Testimonials";
import EmailSection from "@/components/EmailSection";

function Home(props) {
  return (
    <div className="">
          <Hero />
          <HomeService />
          <HomeAboutUs />
          <Statistics />
          <ChooseUs />
          <Testimonials />
          <EmailSection/>
    </div>
  );
}

export default Home;
