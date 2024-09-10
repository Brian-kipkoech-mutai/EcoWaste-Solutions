import React, { useContext } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { formContext } from "@/context/pickupFormContext";

function PriceCard({
  size,
  pricePerMonth,
  capacityGallons,
  maxPeopleServed,
  maxTrashBags,
  maxWeightLbs,
  img,
}) {
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
        mass: 0.3,
      },
    },
  };
  const navigate = useNavigate();
  const { setFormData, formData } = useContext(formContext);
  
  const handlePriceSelect = (priceTire) => {
    setFormData({ ...formData, priceTire });
    navigate("/request-pickup");
  };
  return (
    <motion.div
      variants={viewVariances}
      initial="hidden"
      whileInView="inView"
      viewport={{ amount: 0.5 }}
      className="border   group  hover:shadow-2xl   w-full max-w-xs rounded-md space-y-3 shadow-lg"
    >
      <div className="p-4    flex flex-col  items-center gap-4 ">
        <img src={img} alt="" srcset="" className=" h-44 " />
        <h2 className="text-lg font-semibold text-green-600">
          {capacityGallons} Gallon Trash
        </h2>
      </div>
      <div className="space-y-5">
        <section>
          <ul className="flex flex-col items-center gap-1 font-medium">
            <li>Holds: {maxTrashBags} Trash bags</li>
            <li>Serves: 1-{maxPeopleServed} people</li>
            <li>Max Weight: Approx {maxWeightLbs}kg</li>
            <li>Service: Every Day</li>
          </ul>
        </section>
        <section>
          <p className="text-3xl text-center text-green-600 font-semibold ">
            ${pricePerMonth}
          </p>
          <p className=" text-center  text-sm ">perMonth</p>
        </section>
        <section className="flex items-center justify-center  ">
          <Button
            className="w-3/4  mb-4"
            onClick={() => handlePriceSelect(pricePerMonth)}
          >
            Select Plan
          </Button>
        </section>
      </div>
    </motion.div>
  );
}

export default PriceCard;
