import { formContext } from "@/context/pickupFormContext";
import RequestPickup from "@/pages/RequestPickup";
import React, { useContext } from "react";

function RequestPickupContainer(props) {
   const { formData, setFormData } = useContext(formContext);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };
  const handleSelectChange = (value) => {
   
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
