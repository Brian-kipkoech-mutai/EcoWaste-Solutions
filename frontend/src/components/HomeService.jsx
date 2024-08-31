import React from "react";
import TrashCan from "./TrashCans";
import { Archive, Forklift, MousePointerIcon, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import { trashCanData } from "@/data/trashCanData";

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
        {trashCanData.map(({ icon, text, title }, i) => (
          <TrashCan key={i} {...{ text, title }}>{icon}</TrashCan>
        ))}
        
      </div>
    </div>
  );
}

export default HomeService;
