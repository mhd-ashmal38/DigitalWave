import React from "react";
import { ChartLine, ChevronRight } from "lucide-react";

const servicesData = [
  {
    title: "Social Media Marketing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "SEO Optimization",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "PPC Campaigns",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Content Marketing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Services = () => {

  return (
    <div className="bg-white py-20">
      <h2 className="title-h2">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {servicesData.map((service, index) => (
          <a
            key={index}
            className="group flex flex-col hover:bg-gray-50 rounded-xl p-5 transition"
            href="#"
            data-aos="fade-up"
          >
            <div className="flex justify-center items-center size-12 border border-primary rounded-xl">
              <ChartLine className="text-primary" />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-black">
                {service.title}
              </h3>
              <p className="mt-1 text-gray-500">{service.description}</p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-primary decoration-2 group-hover:underline font-medium">
                Learn more
                <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  <ChevronRight size={16} />
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
