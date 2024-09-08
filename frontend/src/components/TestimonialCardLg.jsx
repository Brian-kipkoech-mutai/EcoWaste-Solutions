import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
function TestimonialCardLg({ img, initials, name, description }) {
  const viewVariances = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    inView: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={viewVariances}
      initial="hidden"
          whileInView="inView"
          viewport={{ once:true, amount:0.5}}
      className="  relative z-40 group hover:shadow-2xl hover:shadow-green-600  border md:py-10  w-full shrink-0   rounded-md flex md:flex-col  max-w-sm  bg-gray-100  md:items-center md:gap-4 shadow-xl md:max-w-64  "
    >
      <section className="flex-1 p-2">
        <h2 className="font-semibold md:hidden group-hover:text-green-600">
          {name}
        </h2>
        <p className=" text-sm font-medium   md:text-center  max-w-56 mx-auto w-fit ">
          {description}
        </p>
      </section>
      <section className="w-2/6 md:flex flex-col md:items-center gap-1">
        <Avatar className="w-full md:w-16   md:h-16 md:rounded-full h-full rounded-sm">
          <AvatarImage src={img} className="object-cover" />
          <AvatarFallback className="bg-green-600 rounded-sm font-bold text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h2 className="font-semibold hidden md:block  group-hover:text-green-600 text-nowrap">
          {name}
        </h2>
      </section>
    </motion.div>
  );
}

export default TestimonialCardLg;
