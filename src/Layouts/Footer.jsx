import React from "react";
import {
  FaTiktok,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Footer() {
  return (
   <footer className="bg-[#8E221F] text-white py-10 px-4 md:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-right">
        
        {/* Useful Links */}
        <div>
          <h3 className="font-normal text-lg mb-3">روابط مفيدة</h3>
          <div className="flex items-center justify-center md:justify-end gap-2 text-lg">
            <FaQuestionCircle className="bg-white text-[#8E221F] rounded-full p-1 text-2xl" />
            <p>طريقة اللعب</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col justify-center items-center lg:justify-center md:justify-center"> 
          <h3 className="font-normal text-lg mb-3 justify-center">مواقع التواصل الاجتماعي</h3>
          <div className="flex justify-center lg:justify-center md:justify-center gap-4 text-2xl">
            <FaEnvelope className="hover:text-[#FECE5D] cursor-pointer" />
            <FaInstagram className="hover:text-[#FECE5D] cursor-pointer" />
            <FaTiktok className="hover:text-[#FECE5D] cursor-pointer" />
            <FaTwitter className="hover:text-[#FECE5D] cursor-pointer" />
          </div>
        </div>

        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <img
            src="/src/assets/images/Logo.svg"
            alt="مين قدها؟"
            className="w-30 h-30"
          />
          <p className="text-sm leading-relaxed">
            مين قدها _ لعبة العائلة والأصدقاء
            <br /> أسئلة تخلي المِرح يشتغل والضحك يخلي الجو يشتعل
            <br /> عيشوا منافسات حامية بروح سعودية تجمع العائلة والأصحاب
          </p>
        </div>
      </div>
    </footer>
  );
}
