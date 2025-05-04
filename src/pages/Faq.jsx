import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adip",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas distinctio eos quos, enim quo delectus quis non dolorum saepe consequuntur quod qui autem eveniet ab mollitia aliquid? Eligendi, minima.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adip",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas distinctio eos quos, enim quo delectus quis non dolorum saepe consequuntur quod qui autem eveniet ab mollitia aliquid? Eligendi, minima.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adip",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas distinctio eos quos, enim quo delectus quis non dolorum saepe consequuntur quod qui autem eveniet ab mollitia aliquid? Eligendi, minima.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adip",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas distinctio eos quos, enim quo delectus quis non dolorum saepe consequuntur quod qui autem eveniet ab mollitia aliquid? Eligendi, minima.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adip",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas distinctio eos quos, enim quo delectus quis non dolorum saepe consequuntur quod qui autem eveniet ab mollitia aliquid? Eligendi, minima.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adip",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas distinctio eos quos, enim quo delectus quis non dolorum saepe consequuntur quod qui autem eveniet ab mollitia aliquid? Eligendi, minima.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-20">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="title-h2 font-bold leading-snug text-gray-900">
            Frequently
            <br />
            asked questions
          </h2>
          <p className="mt-1 hidden md:block text-gray-500">
            Answers to the most frequently asked questions.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="divide-y divide-gray-400">
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className="py-4"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-once="true"
                >
                  <button
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
