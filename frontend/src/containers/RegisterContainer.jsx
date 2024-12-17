import SignUp from "@/pages/signup";
import { registerService } from "@/services/authServices";
import React, { useState } from "react";
import { useMutation } from "react-query";

function RegisterContainer(props) {
  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    setFormData({...formData, [target.name]: target.value });
  };
  const { mutate, isLoading, data, error } = useMutation(registerService);
  const handleSubmit = (e) => {
    e.preventDefault();
     mutate(formData);
  } 
  console.log(formData);
  // console.log();
  return (
    <SignUp
      {...{
        handleChange,
        handleSubmit,
        isLoading,
        data,
        error,
      }}
    />
  );
}

export default RegisterContainer;
