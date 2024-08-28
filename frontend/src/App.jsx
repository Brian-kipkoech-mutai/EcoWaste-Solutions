import React from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/routesConfig";

function App(props) {
  return (
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
