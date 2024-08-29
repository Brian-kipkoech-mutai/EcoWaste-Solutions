import PersonIlustration from "@/svgComponents/PersonIlustration";
import React from "react";

function Hero(props) {
  return (
    <div className="  bg-[url('./assets/logos/wave-haikei%20%286%29.svg')] sm:bg-[url('./assets/logos/wave-haikei%20%284%29.svg')] bg-cover   bg-center pt-16 relative ">
      <section className=" max-w-screen-lg mx-auto p-2 ">
        <section className="space-y-4   mb-10  lg:mb-32">
          <h2 className=" font-semibold text-green-500 text-2xl pt-6 sm:pt-0 ">
            Waste Pickup
          </h2>

          <p className="text-5xl font-semibold max-w-md">
            Your Waste Pickup Solutions
          </p>
          <p className=" mt-4 max-w-sm  border p-2 rounded shadow-2xl font-semibold text-gray-700 first-letter:text-4xl first-letter:text-green-500 relative z-10">
            We provide convenient and eco-friendly waste pickup services
            tailored to your needs. Our team ensures that your waste is handled
            efficiently and responsibly, helping you maintain a clean and
            sustainable environment.
          </p>
        </section>
      </section>
      <div className="absolute  w-screen bottom-0">
        <svg
          fill="#F3FCF7"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <PersonIlustration />
    </div>
  );
}

export default Hero;
