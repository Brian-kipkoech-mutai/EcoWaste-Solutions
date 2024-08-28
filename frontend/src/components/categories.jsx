import { TriangleDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  const [isCategoryOpen, setCategoryState] = useState(false);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: { opacity: 0, y: 20 },
  };
  const hoverVariant = { scale: 1.1 };
  const tapVariant = { scale: 1 };

  const toggleCategories = () => {
    setCategoryState((prev) => !prev);
  };

  return (
    <motion.section animate={isCategoryOpen ? "open" : "closed"}>
      <motion.section
        className="flex gap-1 items-center cursor-pointer"
        onClick={toggleCategories}
      >
        <span className="text-base  text-gray-800 hover:text-green-600 ">Services</span>
        <motion.span
          variants={{
            open: {
              rotate: 180,
              transition: { type: "spring", duration: 0.5 },
            },
            closed: {
              rotate: 0,
              transition: { type: "spring", duration: 0.5 },
            },
          }}
        >
          <TriangleDownIcon className="w-6 h-6" />
        </motion.span>
      </motion.section>

      <motion.section
        className="flex flex-col items-start pl-6 text-sm text-muted-foreground gap-1"
        initial={false}
        animate={isCategoryOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            display: "flex",
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
          closed: {
            opacity: 0,
            transition: {
              when: "beforeChildren",
            },
            transitionEnd: {
              display: "none",
            },
          },
        }}
      >
        <motion.div
          variants={itemVariants}
          whileHover={hoverVariant}
          whileTap={tapVariant}
        >
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              isActive ? "text-gray-800 underline" : "text-muted-foreground"
            }
            whileHover={hoverVariant}
            whileTap={tapVariant}
          >
            Waste Collection
          </NavLink>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={hoverVariant}
          whileTap={tapVariant}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gray-800 underline" : "text-muted-foreground"
            }
          >
            Recycling Services
          </NavLink>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={hoverVariant}
          whileTap={tapVariant}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gray-800 underline" : "text-muted-foreground"
            }
          >
            Garbage pickup
          </NavLink>
        </motion.div>
      </motion.section>
    </motion.section>
  );
}

export default Categories;
