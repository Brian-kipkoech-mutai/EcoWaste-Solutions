import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/routesConfig";
import FormContextProvider from "./context/pickupFormContext";

function App(props) {
  return (
    <BrowserRouter>
      <FormContextProvider>
        <RoutesConfig />
      </FormContextProvider>
    </BrowserRouter>
  );
}

export default App;
