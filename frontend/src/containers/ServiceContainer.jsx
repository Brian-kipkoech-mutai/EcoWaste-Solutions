import { serviceData } from "@/data/serviceData";
import ServicePage from "@/pages/servicePage";
import React from "react";
import { useParams } from "react-router-dom";

 

// Component to display service details based on the service name passed in the URL parameter
function ServiceContainer() {
    const { serviceName } = useParams();
    console.log(serviceName)
    const { header, mainContent, services, benefits, solutions, faq, images:{bgImage,serviceImages} } =
      serviceData[serviceName];
  return (
    <ServicePage
      {...{ header, mainContent, services, benefits, solutions, faq,bgImage,serviceImages }}
    />
  );
}

export default ServiceContainer;
