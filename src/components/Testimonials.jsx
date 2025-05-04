import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos saepe tempore reiciendis libero laborum velit qui illum sed excepturi volup.",
    name: 'John Doe',
    title: 'Product Manager | XYZ',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos saepe tempore reiciendis libero laborum velit qui illum sed excepturi volup.",
    name: 'Jane Smith',
    title: 'CTO | ABC Corp',
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos saepe tempore reiciendis libero laborum velit qui illum sed excepturi volup.",
    name: 'Mike Johnson',
    title: 'Founder | StartUp',
  },
  {
    quote:
      "ALorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos saepe tempore reiciendis libero laborum velit qui illum sed excepturi volup.",
    name: 'Emily Davis',
    title: 'Marketing Lead | CompanyX',
  },
];

const Testimonials = () => {
  return (
    <div className='py-20'>
      <h2 className="title-h2 mb-10">
        Testimonials
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col border border-gray-200 shadow-2xs rounded-xl bg-primary p-6 h-full">
              <p className="text-white text-lg md:text-xl mb-4">
                <em>" {t.quote} "</em>
              </p>
              <div className="mt-auto">
                <h3 className="text-white font-semibold text-base">
                  {t.name}
                </h3>
                <p className="text-gray-300 text-sm">{t.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
