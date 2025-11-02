// we have 3 section tags, one for each section in the hero component: logo and title, subheading, and description with buttons, “اللعب على المتصفح” and one for “تحميل التطبيق”.
import React from 'react'

export default function Hero() {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center min-h bg-[#C32729] mt-10 md:mt-20 shadow-lg">
      <section className=" text-white py-28 px-8 md:px-20 mb-24">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
            <img
                src="/src/assets/images/logo.svg"
                alt="مين قدها؟"
                className="w-40 h-40 mb-4"
            />
        </div>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl text-white mb-4 text-shadow-md ">
            فريقكم سر قوتكم ... قد التحدي؟
        </h2>

        {/* Description and Buttons */}
        <section className="text-center max-w-2xl px-4 text-shadow-md ">
            <p className="text-lg text-white mb-6">
            أسئلة سريعة , منافسات حامية و متعة سعودية لا تنسى 
            </p>
            <div className="flex flex-row md:flex-row gap-4 justify-center">
                <button className="bg-[#F7C94E] hover:bg-[#ffc439] text-[#C32729] font-semibold px-6 py-3 rounded-xl transition">
                    العب على المتصفح
                </button>
                <button className="bg-[#8E221F] hover:bg-[#6e1616] text-white font-semibold px-6 py-3 rounded-xl transition">
                    تحميل التطبيق
                </button>
            </div>
        </section>
      </section>
    </div>
  )
}
