import React from "react";
import TrashCan from "./TrashCans";
import { Archive, Forklift, Recycle } from "lucide-react";

function HomeService(props) {
  return (
    <div className="relative bg-[#EBF2E9]">
      <div className="absolute w-screen  top-0">
        <svg
          fill="#F3FCF7"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="pt-28 flex  flex-wrap mx-auto max-w-screen-lg   justify-center lg:justify-between  gap-4">
        <TrashCan>
          <div className="flex  items-center gap-4 flex-col">
            <Archive color="green" size={60} />
            <h2 className="text-2xl font-bold text-gray-800">Clean Up</h2>
            <p className="text-sm text-gray-600 px-2 font-semibold ">
              We're here to help you organize your trash and make it look fresh.
            </p>
          </div>
        </TrashCan>

        <TrashCan>
          <div className="flex  items-center gap-4 flex-col">
            <Recycle color="green" size={60} />
            <h2 className="text-2xl font-bold text-gray-800">Recycling</h2>
            <p className="text-sm text-gray-600 px-2 font-semibold">
              We're here to help you find the right recycling bins and organize
              your waste.
            </p>
          </div>
        </TrashCan>
        <TrashCan>
          <div className="flex  items-center gap-4 flex-col">
            <Forklift size={60} color="green" />
            <h2 className="text-2xl font-bold text-gray-800">Garbage Pickup</h2>
            <p className="text-sm text-gray-600 font-semibold px-2">
              We're here to help you find the perfect garbage bins and schedule
              your pickup.
            </p>
          </div>
        </TrashCan>
      </div>
    </div>
  );
}

export default HomeService;
