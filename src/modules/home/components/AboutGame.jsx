import React from "react";
import { FaTrophy, FaBrain, FaUsers } from "react-icons/fa";

export default function AboutGame() {
  return (
    <section dir= "rtl"className="bg-white py-24 px-6 md:px-20 mt-16 mb-20">
      {/* Wrapper */}
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up ">
        

        <div className="flex flex-col items-center">
       

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 ">
          وش سالفة
        </h2>

         <img
          src="/src/assets/images/meenGaddhaTxt.svg"
          alt="مين قدها؟"
          className="w-28 md:w-36 mx-auto mb-6 flex flex-col items-start"
        />

        </div>
        {/* Subtitle */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          لعبة تجمع بين المتعة والتعلّم في تجربة فريدة تناسب جميع أفراد العائلة
        </p>
      </div>

      {/* Cards */}
      <div dir="rtl"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-16"
        data-aos="zoom-in-up"
      >
        {/* Card 1 */}
        <div className="bg-[#FFF5F5] border border-[#FFEFEE] rounded-2xl py-12 px-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-center text-[#8E221F] text-6xl mb-5">
            <FaUsers />
          </div>
          <h3 className="text-2xl font-bold text-black mb-3">
            العائلة والأصدقاء
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            للعائلة والأصدقاء: لعبة جماعية ممتعة تجمعكم في تحديات مسلية.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFF5F5] border border-[#FFEFEE] rounded-2xl py-12 px-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-center text-[#8E221F] text-6xl mb-5">
            <FaBrain />
          </div>
          <h3 className="text-2xl font-bold text-black mb-3">تنمّي المعرفة</h3>
          <p className="text-gray-700 leading-relaxed text-base">
            نقّي معرفتك بأسئلة متنوعة! اجمع النقاط واستمتع بزيادة معلوماتك بطريقة ممتعة.
          </p>
        </div>

        {/* Card 3 */}

        <div className="bg-[#FFF5F5] border border-[#FFEFEE] rounded-2xl py-12 px-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-center text-[#8E221F] text-6xl mb-5">
            <FaTrophy />
          </div>
          <h3 className="text-2xl font-bold text-black mb-3">روح التنافس</h3>
          <p className="text-gray-700 leading-relaxed text-base">
            روح تنافسية! جولات مليانة تحديات ونقاط ترفع الحماس بين الفرق.
          </p>
        </div>

      </div>
    </section>
  );
}
