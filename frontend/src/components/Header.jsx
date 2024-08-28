import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "@/assets/logos/wasteLogo.png";
import Truck from "@/assets/logos/recycle.png";
import MenuBar from "./menuBar";
import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { PhoneOutgoingIcon, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import Categories from "./categories";
import AppPages from "./AppPages";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Header(props) {
  const [openSide, setOpenSide] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hoverVariant = { scale: 1.1 };
  const tapVariant = { scale: 1 };
  const toggleMenu = () => {
    if (openSide) {
      setOpenSide(false);
      setTimeout(() => setMenuOpen(false), 400);
    } else {
      setMenuOpen(true);
      setTimeout(() => setOpenSide(true), 400);
    }
  };

  return (
    <div className=" flex  justify-between    p-2 items-center">
      <section className="flex gap-4 items-center">
        <div>
          <img src={Truck} alt="" srcset="" className="w-10  rounded-full " />
           
          
        </div>
        <p className="font-semibold text-lg ">EcoWaste Solutions</p>
      </section>
      <section className=" hidden lg:flex gap-2 items-center">
        <NavLink
          className={" hover:bg-gray-50 py-1 px-4 rounded-md font-semibold"}
        >
          home
        </NavLink>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p className="font-semibold text-base">Services</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="px-2 py-4">
                  <ul className="text-bold text-nowrap space-y-2 font-semibold text-muted-foreground">
                    <li className="cursor-pointer hover:bg-green-50 p-2 rounded-lg">
                      <span className=" hover:text-green-600 hover:underline underline-offset-2">
                        Waste Collection
                      </span>
                      <p className="text-sm">
                        Scheduled collection of household waste.
                      </p>
                    </li>
                    <li className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                      <span className=" hover:text-green-600 hover:underline underline-offset-2">
                        Recycling Services
                      </span>
                      <p className="text-sm">
                        Collection and processing of recyclable materials.
                      </p>
                    </li>
                    <li className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                      <span className=" hover:text-green-600 hover:underline underline-offset-2">
                        Garbage Pickup
                      </span>
                      <p className="text-sm">
                        Regular pickup of garbage and non-recyclable waste.
                      </p>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p className="font-semibold  text-base">Pages</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="px-2 py-4">
                  <ul className="text-bold text-nowrap space-y-2 font-semibold text-muted-foreground">
                    <li className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                      <span className=" hover:text-green-600 hover:underline underline-offset-2">
                        About us
                      </span>
                      <p className="text-sm">
                        Learn more about our company and our mission.
                      </p>
                    </li>
                    <li className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                      <span className=" hover:text-green-600 hover:underline underline-offset-2">
                        Testimonials
                      </span>
                      <p className="text-sm">
                        See what our customers have to say about our services.
                      </p>
                    </li>
                    <li className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                      <span className="t hover:text-green-600 hover:underline underline-offset-2">
                        Pricing tables
                      </span>
                      <p className="text-sm">
                        Explore our pricing options and find the right plan for
                        you.
                      </p>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
      <section className="hidden lg:block">
        {" "}
        <Button
          variant="outline"
          className="flex items-center space-x-2  bg-green-600  text-white "
        >
          Request Pickup <PhoneOutgoingIcon className="w-4" />
        </Button>
      </section>
      <section className="lg:hidden">
        <Sheet open={openSide} onOpenChange={toggleMenu}>
          <SheetTrigger>
            <MenuBar {...{ isMenuOpen, toggleMenu }} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <div>
                  <div className="flex justify-between  mt-5  ">
                    <div className="rounded-full p-2   border border-green-600  cursor-pointer">
                      <User></User>
                    </div>
                    <div>
                      <div>
                        <Button
                          variant="outline"
                          className="flex items-center space-x-2  bg-green-600  text-white "
                        >
                          Request Pickup <PhoneOutgoingIcon className="w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <hr className="space-y-2 block " />
                  <div className="  space-y-3  mt-2 font-semibold text-base  text-gray-800">
                    <NavLink to={"/home"} className={"hover:text-green-600"}>
                      Home
                    </NavLink>
                    <Categories />
                    <AppPages />
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </div>
  );
}

export default Header;
