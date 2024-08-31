


import { CircleCheck } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import trashImg from "../assets/logos/pexels-jorge-maciel-1464608166-26821385.jpg";
  import trashImg2 from "../assets/logos/pexels-cup-of-couple-6632866.jpg";
  import trashImg3 from "../assets/logos/pexels-julio-lopez-75309646-12894739.jpg";

function HomeAboutUs(props) {
    return (
      <div className="bg-[#EBF2E9] py-36 relative">
        <div className="flex flex-col md:flex-row lg:gap-4 justify-between max-w-screen-lg mx-auto">
          <section className=" px-2 space-y-3 md:w-1/2">
            <span className="text-green-500 text-2xl">About Us</span>
            <h2 className="text-4xl font-bold">
              Experience in Waste Disposal Management Services
            </h2>
            <p className="font-semibold first-letter:text-3xl first-letter:text-green-500">
              With years of expertise in the waste management industry, we are
              dedicated to providing efficient, reliable, and eco-friendly
              disposal solutions. Our services are tailored to meet the needs of
              both residential and commercial clients, ensuring a cleaner,
              greener environment for future generations.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2  ">
                <CircleCheck color="white" className="fill-green-500 " />{" "}
                <span className="text-sm font-semibold text-gray-700">
                  Professional waste management services tailored to your needs
                </span>
              </li>
              <li className="flex gap-2  ">
                {" "}
                <CircleCheck color="white" className="fill-green-500 " />
                <span className="text-sm font-semibold text-gray-700">
                  Commitment to sustainability and eco-friendly practices
                </span>
              </li>
              <li className="flex gap-2  ">
                {" "}
                <CircleCheck color="white" className="fill-green-500 " />{" "}
                <span className="text-sm font-semibold text-gray-700">
                  Reliable and efficient service you can trust
                </span>
              </li>
            </ul>
            <section className="flex flex-col items-center gap-2">
              <Button className="w-full shadow-lg rounded-sm">
                Contact Us
              </Button>
              <section>
                <img
                  src={trashImg}
                  alt="  trash image"
                  srcset=""
                  className="rounded-md aspect-video object-cover md:hidden "
                />
              </section>
            </section>
          </section>
          <section className="hidden md:block  w-1/2  max-w-sm  pb-[50%] relative ">
            <img
              src={trashImg}
              alt=""
              srcset=""
              className="absolute w-full h-full object-cover rounded shadow-md "
            />

            <div className="p-5  hidden lg:block  bg-[#EBF2E9]  absolute  w-1/2 top-20 rounded-md sm:-right-20 lg:-left-20 shadow-lg">
              <img
                src={trashImg2}
                alt=""
                srcset=""
                className=" w-full  aspect-video object-cover    rounded "
              />{" "}
            </div>
            <div className="p-5   hidden lg:block absolute bg-[#EBF2E9]  w-1/2 bottom-5 -right-20 rounded-md  shadow-lg">
              <img
                src={trashImg3}
                alt=""
                srcset=""
                className=" w-full  aspect-[9/16] object-cover  object-right shadow-lg   rounded "
              />{" "}
            </div>
          </section>
        </div>
        <div class="absolute bottom-0 w-screen rotate-180 fill-green-600">
          <svg
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
      </div>
    );
}

export default HomeAboutUs;