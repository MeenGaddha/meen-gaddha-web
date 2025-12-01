// we have 3 section tags, one for each section in the hero component: logo and title, subheading, and description with buttons, “اللعب على المتصفح” and one for “تحميل التطبيق”.
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero({showButtons = true, compact = false }) {
  const navigate = useNavigate();
  return (
    <div className="h-full w-screen flex flex-col justify-center items-center min-h bg-[#C32729] mt-0.5 md:mt-0.5 shadow-lg">
      <section 
      className={`text-white py-28 px-8 md:px-20 mb-24 ${
          compact ? "py-12 mb-6" : "py-28 mb-24"
        } px-8 md:px-20 text-center`}>
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/src/assets/images/logo.svg"
            alt="مين قدها؟"
            className="w-[373px] h-40 mb-4"
          />
        </div>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl text-white mb-4 text-shadow-md ">
          فريقكم سر قوتكم ... قد التحدي؟
        </h2>

        {/* Description and Buttons */}
        <section className="text-center max-w-2xl px-4 text-shadow-md ">
          <p className="text-lg text-white mb-6">
             أسئلة سريعة، منافسات حامية و متعة سعودية لا تُنسى 
          </p>

          {/* render buttons only if showButtons = true */}
          {showButtons && (
          <div className="flex flex-row md:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate("/categories")}
              className="bg-[#F7C94E] hover:bg-[#ffc439] text-[#C32729] font-semibold px-6 py-3 cursor-pointer rounded-xl transition"
            >
               العب
            </button>
            <button className="bg-[#8E221F] hover:bg-[#6e1616] text-white font-semibold px-6 py-3 cursor-pointer rounded-xl transition">

               تحميل التطبيق
            </button>
          </div>
          )}
        </section>
      </section>
    </div>
  );
}
