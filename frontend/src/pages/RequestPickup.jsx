import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

function RequestPickup({
  handleSubmit,
  handleChange,
  handleSelectChange,
  formData,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-2 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center text-green-600">
          Request Trash Pickup
        </h2>
        <fieldset className="flex flex-col gap-3">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent required>
                <SelectItem value="kabuku">Kabuku</SelectItem>
                <SelectItem value="limuru">Limuru</SelectItem>
                <SelectItem value="tigoni">Tigoni</SelectItem>
                <SelectItem value="spu">S.P.U</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="py-3">
            <Label htmlFor="priceTire">Price Tire:</Label>
            <NavLink to={"/pricing-table"}>
              <Button className="ml-4 hover:underline underline-offset-2 rounded-sm">
                Select Price
              </Button>
            </NavLink>
            
            <div
              className={classNames("py-6 flex gap-2 items-center", {
                hidden: !formData.priceTire,
              })}
            >
              <h2 className="font-semibold">Selected Tire:</h2>
              <p className="text-green-600 text-2xl">$ {formData.priceTire}</p>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <Label htmlFor="description">Description of Trash</Label>
          <Textarea
            id="description"
            name="description"
            className="bg-gray-50"
            placeholder="Additional Notes (Optional)"
            value={formData.description}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <Button className="w-full" type="submit">
            Submit Request
          </Button>
        </fieldset>
      </form>
    </div>
  );
}

export default RequestPickup;
