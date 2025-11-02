import React from "react";

export default function HelpTools() {
  return (
    <section
      dir="rtl"
      className="bg-white py-24 px-6 md:px-20"
      data-aos="fade-up"
  
    >
      {/* Section Title */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          وسائل المساعدة
        </h2>
      </div>

      {/* Grid Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div
          className="bg-[#FDFDFD] rounded-2xl shadow-md py-10 px-6 text-center transition-all hover:-translate-y-2 hover:shadow-lg duration-300"
          data-aos="zoom-in-up"
      
        
        >
          <img
            src="/src/assets/images/chatGPT.svg"
            alt="openai icon"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-3 text-black">
            استدعاء العقل المدير
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            اسألوا ChatGPT وخذوا إجابة وحدة بس قبل ما الوقت يخلص ⏳
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#FDFDFD] rounded-2xl shadow-md py-10 px-6 text-center transition-all hover:-translate-y-2 hover:shadow-lg duration-300"
          data-aos="zoom-in-up"
         
        >
          <img
            src="/src/assets/images/silent.svg"
            alt="alert icon"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-3 text-black">سكتّهم!</h3>
          <p className="text-gray-700 leading-relaxed text-base">
            حسّيتوا الفريق الثاني طاير بالإجابات؟ سكتّوهم جولة كاملة! واكسبو
            الوقت الذهبي 🔥{" "}
          </p>
        </div>

        {/* Card 3 (Centered Bottom) */}
        <div
          className="bg-[#FDFDFD] rounded-2xl shadow-md py-10 px-6 text-center transition-all hover:-translate-y-2 hover:shadow-lg duration-300 md:col-span-2 md:w-1/2 justify-self-center"
          data-aos="fade-up"
          
        >
          <img
            src="/src/assets/images/doublePoints.svg"
            alt="reload icon"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-3 text-black">تبديل النقاط!</h3>
          <p className="text-gray-700 leading-relaxed text-base">
            الحظ مو معاكم؟ لا تشيلون هم! استخدموا تبديل النقاط وخذوا فرصة جديدة
            تقلب النتيجة لصالحكم 🔄
          </p>
        </div>
      </div>
    </section>
  );
}
