import React from "react";
import { priceCardData } from "@/data/priceCansData";
import PriceCard from "@/components/PriceCard";

function Pricing(props) {
  return (
    <div>
      <div>
        <div className="space-y-4 md:py-4 ">
          <h2 className="text-green-600  font-medium tracking-wider text-center ">
            Pricing Tables
          </h2>
          <p className="text-sm text-center  ">
            No any hidden charge, choose our pricing plan
          </p>
        </div>
        <div className="flex flex-wrap  mx-auto max-w-screen-lg w-full gap-2 justify-center lg:justify-between gap-y-4 py-4 pb-14">
          {priceCardData.map(
            (
              {
                size,
                pricePerMonth,
                capacityGallons,
                maxPeopleServed,
                maxTrashBags,
                maxWeightLbs,
                img,
              },
              i
            ) => (
              <PriceCard
                {...{
                  size,
                  pricePerMonth,
                  capacityGallons,
                  maxPeopleServed,
                  maxTrashBags,
                  maxWeightLbs,
                  img,
                }}
                key={i}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
