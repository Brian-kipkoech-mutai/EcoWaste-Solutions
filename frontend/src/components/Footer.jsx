import { DashIcon,} from "@radix-ui/react-icons";
import { Facebook, Instagram, Linkedin, LucideMapPinHouse, Mail, Phone, Quote, Youtube,  } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="bg-[#002F1F]">
      <div className="p-2 px-4 flex  flex-wrap gap-4 max-w-screen-xl  mx-auto  justify-between   text-gray-50">
        <section className="space-y-1  max-w-sm">
          <h2 className="font-semibold text-lg mb-3 ">EcoWaste Solutions</h2>
          <p className="text-sm  px-2 lg:px-0 italic">
            <Quote className="rotate-180 text-green-500" />
            <span className="text-green-500 text-2xl font-bold float-left px-2 pb-2 ">
              {" "}
              L
            </span>
            eading the Way in Sustainable Waste Management: Reducing, Recycling,
            and Reimagining Waste for a Cleaner, Greener Future.
            <Quote className="text-green-500" />
          </p>
        </section>
        <section className="space-y-1">
          <h2 className="font-semibold text-lg">Links</h2>
          <div className="flex  gap-3  lg:flex-col  px-2 lg:px-0">
            <Link className="text-sm underline hover:text-green-500 underline-offset-1  ">
              About us
            </Link>
            <Link className="text-sm underline hover:text-green-500 underline-offset-1  ">
              Contact us
            </Link>
            <Link className="text-sm underline hover:text-green-500 underline-offset-1  ">
              Services
            </Link>
            <Link className="text-sm underline hover:text-green-500 underline-offset-1  ">
              Request Pickup
            </Link>
          </div>
        </section>
        <section>
          <h2 className="font-semibold text-lg">Working Hours</h2>
          <div className="text-sm  px-2 lg:px-0 leading-6">
            <p>Our office is open from:</p>

            <p>
              Monday, <span className="text-green-500">9:00 AM </span>
              <DashIcon className="inline" />
              <span className="text-green-500">6:00 PM</span>
            </p>

            <p>to</p>

            <p>
              Friday, <span className="text-green-500">9:00 AM </span>
              <DashIcon className="inline" />
              <span className="text-green-500">6:00 PM</span>
            </p>

            <p>We are closed on weekends and public holidays.</p>
          </div>
        </section>
        <section className=" space-y-3">
          {" "}
          <h2 className="text-lg font-semibold ">Get in Touch</h2>
          <Link
            to={
              "https://www.google.com/maps/search/Kabuku+vintage/@-1.147491,36.6645057,144m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
            }
            className="flex gap-2 items-center hover:text-green-500 "
          >
            {" "}
            <LucideMapPinHouse className="text-green-500" /> add:Kabuku Vintage
          </Link>
          <Link
            to={"mailto:"}
            className="flex gap-2 items-center  hover:text-green-500"
          >
            {" "}
            <Mail className="text-green-500 " /> <p>Eliudnjoroge@gmail.com</p>
          </Link>
          <Link
            to={"tel:+254722152936"}
            className="flex gap-2 items-center  hover:text-green-500 "
          >
            {" "}
            <Phone className="text-green-500 " />
            <p>+254722152936</p>
          </Link>
          <section className="flex gap-4 items-center">
            <Link>
              <Facebook size={40} className="bg-green-900  hover:bg-green-500 p-2 rounded-full" />
            </Link>

            <Link>
              <Instagram size={40} className="bg-green-900  hover:bg-green-500 p-2 rounded-full" />
            </Link>

            <Link>
              <Linkedin size={40} className="bg-green-900  hover:bg-green-500 p-2 rounded-full" />
            </Link>

            <Link>
              <Youtube size={40} className="bg-green-900  hover:bg-green-500 p-2 rounded-full" />
            </Link>
          </section>
        </section>
        <hr className="h-[0.5px] w-full mt-5 mb-2 block border-muted-foreground bg-transparent" />

        <p className="text-center w-full">
          © 2024{" "}
          <span className="text-green-500 font-semibold italic">@Eliud</span>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
