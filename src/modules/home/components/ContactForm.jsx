import React from "react";

export default function ContactForm() {
  return (
    <section className="w-full bg-[#FFEFEE] py-24 mb-0 px-6 md:px-20">
      <div
      dir="rtl"
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10 md:p-16 text-center"
        data-aos="fade-up"
      >
        {/*Title + Subtitle */}
        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-3">
          تواصل معنا
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          وُدّكم تقولون رأيكم أو عندكم فكرة حلوة؟ ❤️ 
          نحب نسمع منكم دائمًا!
          تواصلوا معنا وخلونا نطوّر اللعبة سوا!
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              الاسم
            </label>
            <input
              type="text"
              placeholder="أدخل اسمك"
              className="w-full border-b border-gray-300 focus:border-[#8E221F] focus:outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border-b border-gray-300 focus:border-[#8E221F] focus:outline-none py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-800 font-medium mb-1">
              الموضوع
            </label>
            <textarea
              rows="4"
              placeholder="اكتب رسالتك هنا..."
              className="w-full border-b border-gray-300 focus:border-[#8E221F] focus:outline-none py-2 resize-none"
            ></textarea>
          </div>
        </form>

        {/* Icon + Button */}
        <div dir="ltr" className="flex flex-col md:flex-row items-center justify-between mt-10">
          <img
            src="/src/assets/images/contact.svg"
            alt="contact Icon"
            className="w-28 md:w-32 mb-6 md:mb-0"
          />

          <button className="bg-[#8E221F] hover:bg-[#a42b28] text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300">
            أرسل
          </button>
        </div>
      </div>
    </section>
  );
}
