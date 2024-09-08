import TestimonialCardLg from "@/components/TestimonialCardLg";
import { testimonialsPadgeData } from "@/data/testimonilasPageData";
import { inView, motion } from "framer-motion";
import React from "react";

function Testimonilas(props) {
  const parentVariants = {
    hidden: { opacity: 0 },
    inView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children with a delay
      },
    },
  };

  return (
    <div>
      <section className=" relative bg-[url('./assets/logos/pexels-ann-h-45017-6935078.jpg')] md:bg-[url('./assets/logos/tesimonilasbglg.jpg')] h-[70vh] bg-cover sm:bg-contain bg-bottom ">
        <div class="w-screen absolute bottom-0 rotate-180">
          <svg
            className="w-screen bg-red fill-white stroke-none"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="  p-4  relative z-20 flex  overflow-x-auto  md:flex-wrap gap-4 gap-y-6 mx-auto max-w-screen-xl md:justify-center  ">
        {testimonialsPadgeData.map(({ img, initials, name, description }) => (
          <TestimonialCardLg {...{ img, initials, name, description }} />
        ))}
      </section>
      <div class="w-screen bottom-0 rotate-180 mt-4">
        <svg
          className="w-screen bg-red fill-[#002F1F] backdrop-blur-sm bg-green-950 stroke-none"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Testimonilas;
