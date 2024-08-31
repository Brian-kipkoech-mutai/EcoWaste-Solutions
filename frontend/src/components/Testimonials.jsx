import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonialsData } from "@/data/testimonials";
import PersonCard from "./personCard";

function Testimonials(props) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-lg space-y-5">
        <h2 className="text-green-500 text-center font-medium">Testimonials</h2>
        <p className="text-3xl  font-semibold  text-center">
          What our clients say about EcoWaste Solutions
        </p>
        <section className="flex gap-4   overflow-auto  md:flex-wrap justify-center md:flex-flex-wrap  p-2  ">
          {testimonialsData.map(({ name, img, description, initials }) => (
            <PersonCard {...{ name, img, description, initials }} />
          ))}
        </section>
          </div>
    
    </div>
  );
}

export default Testimonials;
