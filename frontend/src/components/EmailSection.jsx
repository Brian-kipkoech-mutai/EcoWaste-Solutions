import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

function EmailSection(props) {
  return (
    <div className="bg-[url(./assets/logos/layered-peaks-haikei.svg)]">
      <div class=" w-screen  bottom-0 fill-gray-100">
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
          <h2 className="  text-3xl font-semibold text-center text-gray-100">Subscribe to our newsletter</h2>
          <div className="flex gap-2 max-w-md py-40  mx-auto">
              
              <Input type='email' placeHolder='Enter your email adress' className=" placeholder:text-green-500 outline-green-500 placeholder:font-semibold tracking-wider" />
              <Button>Subscribe</Button>
          </div>

        
    </div>
  );
}

export default EmailSection;
