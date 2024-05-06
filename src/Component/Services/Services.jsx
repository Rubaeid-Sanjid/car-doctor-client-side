import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> {
            setServices(data)
        })
    }, [])

  return (
    <div className="container mx-auto px-3 lg:px-12 mb-12">
      <div className="text-center mx-auto lg:w-1/2">
        <h3 className="text-[#FF3811] text-xl font-bold mb-4">Service</h3>
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          Our service area
        </h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};
export default Services;
