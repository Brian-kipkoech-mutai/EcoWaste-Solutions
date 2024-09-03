import { Button } from "@/components/ui/button";
import { MoveRight, CircleCheck, UserRoundCheck } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import classNames from "classnames";

function ServicePage({
  header,
  mainContent,
  services,
  benefits,
  solutions,
  faq,
  bgImage,
  serviceImages,
}) {
  return (
    <div className="bg-gray-100">
      <header
        style={{ backgroundImage: `url('${bgImage}') ` }}
        className={` bg-opacity-100 h-[65vh] bg-cover bg-center grid place-items-center relative bg-scale-down  `}
      >
        <h1 className="text-white text-4xl text-center font-semibold">
          {header.title}
        </h1>
        <div class="absolute -bottom-[0.5px] rotate-180  w-screen fill-gray-100 ">
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
      </header>

      <main className="p-2 py-4 space-y-4 md:flex mx-auto max-w-screen-lg justify-between items-center gap-4">
        <div className="hidden md:block space-y-3">
          <div>
            <div className="flex flex-col gap-6 min-w-40 bg-[#EBF5E9] border p-4 rounded-md">
              <NavLink
                to={"/services/PickupService"}
                className={({ isActive }) =>
                  classNames("bg-gray-100", {
                    "bg-green-600 shadow-lg rounded    text-white": isActive,
                  })
                }
              >
                <Button className="w-full space-x-1 bg-inherit  text-inherit hover:text-white hover:shadow-lg">
                  <MoveRight />
                  <span>Pickup Services</span>
                </Button>
              </NavLink>
              <NavLink
                to={"/services/RecyclingServices"}
                className={({ isActive }) =>
                  classNames("bg-gray-100", {
                    "bg-green-600 shadow-lg rounded    text-white": isActive,
                  })
                }
              >
                <Button className="w-full space-x-1 bg-inherit  text-inherit hover:text-white hover:shadow-lg">
                  <MoveRight />
                  <span>Recycling Services</span>
                </Button>
              </NavLink>
              <NavLink
                to={"/services/WasteCollection"}
                className={({ isActive }) =>
                  classNames("bg-gray-100", {
                    "bg-green-600 shadow-lg rounded    text-white": isActive,
                  })
                }
              >
                <Button className="w-full space-x-1 bg-inherit  text-inherit hover:text-white hover:shadow-lg">
                  <MoveRight />
                  <span>Waste Collection</span>
                </Button>
              </NavLink>
            </div>
          </div>

          <div className="bg-[#EBF5E9] border space-y-3 p-4 rounded">
            <h2 className="font-semibold">Ask a question</h2>
            <form action="" className="space-y-1">
              <fieldset>
                <Label>Full Name</Label>
                <Input
                  placeHolder="name"
                  type="string"
                  className="bg-gray-50"
                />
              </fieldset>
              <fieldset>
                <Label>Email Address</Label>
                <Input
                  placeHolder="email"
                  type="email"
                  className="bg-gray-50"
                />
              </fieldset>
              <fieldset>
                <Label>Phone Number</Label>
                <Input placeHolder="phone" type="tel" className="bg-gray-50" />
              </fieldset>
              <fieldset>
                <Label>Message</Label>
                <Textarea className="bg-gray-50" />
              </fieldset>
              <fieldset className="flex justify-center py-2">
                <Button className="w-full">Send Message</Button>
              </fieldset>
            </form>
          </div>

          <div className="bg-[#003121] rounded p-4 space-y-4">
            <UserRoundCheck size={40} className="stroke-green-600 mx-auto" />
            <h2 className="text-white font-semibold text-2xl text-center">
              Do you Need any help
            </h2>
            <div className="border-dotted border-green-700 text-white border rounded h-24 grid place-items-center gap-2 my-5">
              <Link to="mailto:eliud@gmail.com">eliud@gmail.com</Link>
              <Link to="tel:+254722152936">+254722152936</Link>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="font-semibold text-2xl mb-2">{mainContent.title}</h2>
          <section>
            <p className="font-semibold">{mainContent.description}</p>
          </section>

          <div className="flex flex-wrap justify-center gap-3 mx-auto max-w-screen-lg">
            {services.map((service, index) => (
              <section
                key={index}
                className="flex gap-3 items-center shadow-lg border rounded-lg max-w-screen-sm lg:max-w-sm p-2"
              >
                <div>
                  <CircleCheck
                    size={60}
                    className="fill-green-500 stroke-gray-100"
                  />
                </div>
                <section>
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                  <p className="mt-2">{service.description}</p>
                </section>
              </section>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl mb-2">{benefits.title}</h2>
            <p className="font-semibold">{benefits.description}</p>
            <section>
              <ul className="[&>*]:flex [&>*]:gap-2 space-y-1">
                {benefits.list.map((item, index) => (
                  <li key={index}>
                    <CircleCheck
                      size={20}
                      className="fill-green-500 stroke-gray-100"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="flex max-h-64 gap-4 py-5">
            <section className="hidden md:block md:w-1/2">
              <img
                loading="lazy"
                src={serviceImages[0]}
                alt="People picking up trash"
                className="object-cover w-full h-full rounded-md shadow-xl border"
              />
            </section>
            <section className="md:w-1/2">
              <img
                loading="lazy"
                src={serviceImages[1]}
                alt="Trash collection"
                className="object-cover rounded-md object-center w-full h-full shadow-xl border"
              />
            </section>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">{solutions.title}</h2>
            <p className="font-semibold">{solutions.description}</p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">{faq.title}</h2>
            <div>
              <Accordion type="single" collapsible>
                {faq.items.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ServicePage;
