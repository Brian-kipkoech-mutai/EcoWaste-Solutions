import React from 'react';
  import img from "../assets/logos/pexels-ron-lach-9034680-removebg-preview.png";
import { Clock, Recycle } from 'lucide-react';
import { Button } from './ui/button';

function ChooseUs(props) {
    return (
      <div className="bg-[#EBF2E9] relative">
        <div className="w-screen fill-green-600 rotate-180">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
        <div className="max-w-screen-lg mx-auto  pb-32">
          <div className="flex flex-col  items-center md:flex-row  gap-6 justify-between p-2">
            <div className="md:w-1/2">
              <img
                src={img}
                alt=""
                srcset=""
                className="rounded-lg md:aspect-[9/10] aspect-video object-cover    "
              />
            </div>
            <div className="flex flex-col gap-6 md:w-1/2">
              <p className="text-green-500 font-semibold self-end">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-semibold">
                Why choose our waste disposal services
              </h2>
              <div className="flex flex-col gap-5 ">
                <section className="flex gap-2">
                  <section>
                    <Recycle
                      size={50}
                      className="bg-green-50 rounded-full p-2 text-green-500"
                    />
                  </section>
                  <section>
                    <h2 className="text-lg font-semibold  ">
                      Environmentally Conscious
                    </h2>
                    <p className="font-medium text-sm   text-gray-800">
                      We prioritize sustainability and ensure that waste is
                      disposed of in an eco-friendly manner.
                    </p>
                  </section>
                </section>
                <section className="flex gap-2">
                  <section>
                    <Clock
                      size={50}
                      className="bg-green-50 rounded-full p-2 text-green-500"
                    />{" "}
                  </section>
                  <section>
                    <h2 className="text-lg font-semibold  ">
                      Punctual Services
                    </h2>
                    <p className="font-medium text-sm   text-gray-800">
                      Our team is committed to providing timely and efficient
                      waste disposal services.
                    </p>
                  </section>
                </section>
                <section className="self-end w-full  max-w-md flex justify-center ">
                  {" "}
                  <Button className="w-full rounded-sm ">Contact Us</Button>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute w-screen rotate-180 bottom-0 fill-gray-100">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    );
}

export default ChooseUs;