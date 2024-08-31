import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function TrashCan({ children, title, text }) {
  const [isHovering, setisHovering] = useState(false);
  const randomTime = Math.random() * +0.5;

  const iconsVariance = {
    rotate: {
          rotate: 360,
        
      transition: { type: "spring", duration: 0.5 },
    },
    original: {
        rotate: 0,
        
        transition: { type: "spring", duration: 1, bounce: 0.6 },
      
    },
  };

  return (
    <motion.div
      style={{ position: "relative", width: "300px", height: "350px" }}
      initial={{
        opacity: 0,
        x: -300,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, type: "spring", delay: randomTime },
      }}
      onViewportEnter={() => {
        setisHovering(true);
        setTimeout(() => setisHovering(false), 500);
      }}
      onHoverStart={() => setisHovering(true)}
      onHoverEnd={() => setisHovering(false)}
    >
      <svg width="300" height="350" xmlns="http://www.w3.org/2000/svg" className="">
        <path
          d="M 10 40 
             Q 150 10, 290 40 
             L 240 320 
             Q 150 350, 60 320 
             Z"
          strokeWidth="1"
          className=" fill-slate-100 "
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "50px",
          width: "70%",
          color: "black",
        }}
      >
        <div className="flex  items-center gap-4 flex-col">
          <motion.div
            animate={isHovering ? "rotate" : "original"}
            variants={iconsVariance}
          >
            {children}
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 font-semibold px-2">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TrashCan;
