import React from "react";

export default function SubscriptionInfo() {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-20">
        
        {/* Mockup */}
        <div
          className="relative flex justify-center items-end md:w-1/2 mt-10 md:mt-0"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          {/* Laptop */}
          <img
            src="/src/assets/images/laptopMockup.svg"
            alt="Laptop Mockup"
            className="w-[90%] max-w-[600px] drop-shadow-xl"
          />

          {/* Phone */}
          <img
            src="/src/assets/images/phoneMockup.svg"
            alt="Phone Mockup"
            className="absolute bottom-[20%] right-0.5 w-[140px] sm:w-[160px] md:w-[190px] lg:w-[220px] drop-shadow-2xl scale-[2]"
          />
        </div>

        {/* Subscription Info: */}
        <div
          className="text-center md:text-right md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <h2 className="text-3xl md:text-3xl font-bold text-black mb-4">
            فئات مجانية كثيرة بانتظاركم – العبوا بلا حدود!
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            اللعب المجاني ممتع… بس المتعة الحقيقية تبدأ مع الاشتراك 🤩 افتحوا
            الفئات المميزة، اصنعوا فئتكم الخاصة، وعيشوا التحدي على طريقتكم!
          </p>

          <button className="bg-[#ffc439] hover:bg-[#e2af34] text-black font-bold py-3 px-10 rounded-lg shadow-md transition-all duration-300">
            أشترك
          </button>
        </div>
      </div>
    </section>
  );
}
