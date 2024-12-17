import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/routesConfig";
import FormContextProvider from "./context/pickupFormContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FormContextProvider>
          <RoutesConfig />
        </FormContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
