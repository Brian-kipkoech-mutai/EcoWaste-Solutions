   import React from 'react';
    import {
      Avatar,
      AvatarFallback,
      AvatarImage,
    } from "@/components/ui/avatar";
import { motion } from 'framer-motion';
   function PersonCard({initials,name,description,img}) {
    return (
        <motion.div
            initial={{
           x:-120
            }}
            whileInView={{
            x:0,
            transition: { duration: 0.5, type: "spring" },
  
            }}
            viewport={{
                margin:'0px 0px -50px 0px'
              }
            }
            className=" group shadow-xl border-1 bg-white rounded-lg  max-w-sm p-2  flex md:flex-col gap-4 shrink-0 outline outline-green-500 hover:outline-transparent outline-[1px] hover:shadow-green-600">
        <section className="flex items-center gap-4">
          <Avatar className="h-full w-20 md:h-16 md:w-16 md:rounded-full rounded-sm shadow-xl ">
            <AvatarImage
              src={img}
              className="object-cover object-center  "
            />
            <AvatarFallback className=" h-full w-full md:h-16 md:w-16 font-semibold tracking-wider rounded-none md:rounded-full bg-green-600 text-white group-hover:bg-green-700">
              {initials}
            </AvatarFallback>
          </Avatar>
          <section className="text-lg font-semibold hidden md:block group-hover:text-green-600">
            {name}
          </section>
        </section>
        <section className="">
          {" "}
          <section className="text-lg font-semibold  md:hidden">{name}</section>
          <p className="font-medium  text-sm">
            {description}
          </p>
        </section>
      </motion.div>
    );
   }
   
   export default PersonCard;