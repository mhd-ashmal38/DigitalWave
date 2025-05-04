import React from "react";
import { ChartLine, ChevronRight } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Results-Driven",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae adipisci harum perspiciatis repudiandae aut a ipsam at autem id, culpa incidunt maiores",
    },
    {
      title: "Innovative Strategies",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae adipisci harum perspiciatis repudiandae aut a ipsam at autem id, culpa incidunt maiores",
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae adipisci harum perspiciatis repudiandae aut a ipsam at autem id, culpa incidunt maiores",
    },
  ];

  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="title-h2">Why Choose Us</h2>
          <p className="mt-3 text-gray-500 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in
            aspernatur quisquam libero dolor quam itaque labore deleniti autem
            hic eveniet id similique incidunt perspiciatis quasi tenetur
            numquam, dicta dolores!
          </p>
          <p className="mt-5">
            <a
              className="inline-flex items-center gap-x-1 text-sm text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium group"
              href="#"
            >
              Learn more
              <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                <ChevronRight size={18} />
              </span>
            </a>
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-x-5 sm:gap-x-8" data-aos="fade-left">
              <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full bg-primary text-white shadow-2xs mx-auto">
                <ChartLine />
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="mt-1 text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
