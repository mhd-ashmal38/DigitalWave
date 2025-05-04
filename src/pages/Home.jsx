import React from "react";
import Img from "../assets/group.svg";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-secondary to-[#342231] overflow-hidden">
      <img
        src={Img}
        alt="Abstract Background"
        className="absolute right-0 w-screen h-full object-cover  z-0 opacity-30"
      />
      <div className="relative z-10 flex justify-center items-center text-center w-full h-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div>
          <h1 className="lg:text-6xl md:text-4xl md:text-center text-start text-2xl font-bold text-white">
            Boost Your Business with <br />
            Next-Gen Marketing Solutions!
          </h1>
          <p className="lg:text-lg md:text-xl md:text-center text-start text-sm text-white/80 max-w-2xl mx-auto pt-5">
            We help tech-savvy brands scale through data-driven digital
            strategies. Let’s grow your impact together.
          </p>
          <div className="flex justify-center items-center">
            <button className="group flex justify-center items-center gap-2 bg-primary hover:bg-accent px-7 py-2 rounded-lg mt-7 text-white font-medium transition-all duration-300">
              Get Started
              <ChevronRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
