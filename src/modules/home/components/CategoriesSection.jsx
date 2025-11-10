import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import {
  getMostPlayedCategories,
  getExclusiveCategories,
} from "../services/categoryService";



export default function CategoriesSection() {
  const [mostPlayed, setMostPlayed] = useState([]);
  const [exclusive, setExclusive] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log("Render CategoriesSection");
  console.log(mostPlayed, exclusive);
  console.log("mostPlayed:", mostPlayed.length);
  console.log("exclusive:", exclusive.length);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const [mostPlayedData, exclusiveData] = await Promise.all([
          getMostPlayedCategories(),
          getExclusiveCategories(),
        ]);
        setMostPlayed(mostPlayedData);
        setExclusive(exclusiveData);
      } catch (error) {
        console.error(error);
        setErrorMsg("حدث خطأ أثناء تحميل الفئات "); // ✅ استخدمي علامات اقتباس إنجليزية
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
      {isLoading && (
        <p className="text-center text-gray-600">جارٍ تحميل الفئات...</p>
      )}

      {errorMsg && <p className="text-center text-red-600">{errorMsg}</p>}
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
      key={mostPlayed.length}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="max-w-6xl mx-auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {mostPlayed.map((cat, index) => (
          <SwiperSlide key={index}>
            <CategoryCard img={cat.photo} title={cat.category_name} />
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
      key={exclusive.length}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        className="max-w-6xl mx-auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {exclusive.map((cat, index) => (
          <SwiperSlide key={index}>
            <CategoryCard img={cat.photo} title={cat.category_name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
