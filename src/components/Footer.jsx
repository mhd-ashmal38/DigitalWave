import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-white"
              href="#"
              aria-label="Brand"
            >
              DigitalWave
            </a>
          </div>

          <div className="flex justify-center text-sm my-3 text-gray-400">
            <p className="cursor-pointer hover:underline transition duration-200 ease-in-out">Privacy Policy</p>
            <p className="px-3">/</p>
            <p className="cursor-pointer hover:underline transition duration-200 ease-in-out">Terms of Service</p>
          </div>

          <p className="text-gray-400 text-sm">
            © 2025 DigitalWave Marketing.
          </p>

          <div className="mt-4">
            <ul className="flex justify-center gap-7 sm:mt-0">
              <li>
                <Facebook
                  size={20}
                  className="text-neutral-400 hover:text-white cursor-pointer transition duration-300 ease-in-out"
                />
              </li>
              <li>
                <Twitter
                  size={20}
                  className="text-neutral-400 hover:text-white cursor-pointer transition duration-300 ease-in-out"
                />
              </li>
              <li>
                <Linkedin
                  size={20}
                  className="text-neutral-400 hover:text-white cursor-pointer transition duration-300 ease-in-out"
                />
              </li>
              <li>
                <Instagram
                  size={20}
                  className="text-neutral-400 hover:text-white cursor-pointer transition duration-300 ease-in-out"
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
