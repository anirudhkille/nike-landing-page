import React from "react";
import { services } from "../constants";
import SerivicesCard from "../components/SerivicesCard";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <SerivicesCard
          imageURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
          key={service.label}
        />
      ))}
    </section>
  );
};

export default Services;
