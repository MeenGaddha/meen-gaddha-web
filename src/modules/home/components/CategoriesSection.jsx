import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import categories from "../../../data/homeCategories.json";

export default function CategoriesSection() {
  const { mostPlayedCategories, exclusiveCategories } = categories;

  const CategoryCard = ({ img, title }) => (
    <div className="bg-white border-2 border-[#8E221F] rounded-lg shadow-sm overflow-hidden flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <div className="flex justify-center items-center p-6">
        <img src={img} alt={title} className="w-24 h-24 object-contain" />
      </div>

      {/* Footer (title area) */}
      <div className="bg-[#8E221F] w-full py-3 flex justify-center">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-24 px-6 md:px-20">

      {/* most played section: */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          فئاتنا الأكثر لعباً!
        </h2>
        <p className="text-gray-600 text-lg">
          فئات مليانة حماس وتحدي، جرّبها كلها واستمتع بالمنافسة مع العائلة!
        </p>
      </div>

      {/* most played slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        className="max-w-6xl mx-auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {mostPlayedCategories.map((cat, index) => (
          <SwiperSlide key={index}>
            <CategoryCard img={cat.img} title={cat.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* exclusive section: */}
      <div className="text-center mt-24 mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          فئاتنا الحصرية!
        </h2>
        <p className="text-gray-600 text-lg">
          اكتشف فئات جديدة وممتعة تناسب جميع الأعمار والاهتمامات 🎯
        </p>
      </div>

      {/* exclusive slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        className="max-w-6xl mx-auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {exclusiveCategories.map((cat, index) => (
          <SwiperSlide key={index}>
            <CategoryCard img={cat.img} title={cat.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
