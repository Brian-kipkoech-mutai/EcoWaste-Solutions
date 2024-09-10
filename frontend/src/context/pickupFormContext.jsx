import React, { createContext, useState } from "react";

export const formContext = createContext();
function FormContextProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    priceTire: "",
    description: "",
  });

  return (
    <formContext.Provider value={{ formData, setFormData }}>
      {children}
    </formContext.Provider>
  );
}

export default FormContextProvider;
