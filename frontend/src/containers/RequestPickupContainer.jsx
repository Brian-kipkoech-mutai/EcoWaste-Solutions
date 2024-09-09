import RequestPickup from "@/pages/RequestPickup";
import React, { useState } from "react";

function RequestPickupContainer(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    priceTire: "$20.5",
    description: "",
  });

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };
  const handleSelectChange = ({ target: value }) => {
    setFormData({ ...formData, location: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to API
    console.log(formData);
  };

  return (
    <div>
      <RequestPickup
        {...{ handleChange, handleSelectChange, handleSubmit, formData }}
      />
    </div>
  );
}

export default RequestPickupContainer;
