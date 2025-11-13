import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky w-full top-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button className="bg-[#FECE5D] hover:bg-[#ffc439] text-black font-semibold px-6 py-2 rounded-xl transition">
            سجّل دخولك
          </button>
          
        </div>

        {/* Links (only on desktop) */}
        <div className="hidden md:flex gap-10 text-[17px] font-medium text-black">
          <Link to="/" className="hover:text-[#8B1E1E] transition">نبذة عنا</Link>
          <Link to="/how-to-play" className="hover:text-[#8E221F] transition">طريقة اللعب</Link>
          <Link to="/categories" className="hover:text-[#8E221F] transition">الفئات</Link>
          <Link to="/subscribe" className="hover:text-[#8E221F] transition">أشترك</Link>
          <Link to="/contact" className="hover:text-[#8E221F] transition">تواصل معنا</Link>
        </div>

        {/* Login button + logo */}
        <div className="hidden md:block">
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div>
          <button
          className="md:hidden text-3xl text-gray-800 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        </div>
        
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden flex flex-col items-center gap-3 bg-[#fffdf8] shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <img src={logo} alt="logo" className=" lg:hidden items-center  w-30 h-30 object-contain" />
        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#8E221F]">نبذة عنا</Link>
        <Link to="/how-to-play" onClick={() => setIsOpen(false)} className="hover:text-[#8E221F]">طريقة اللعب</Link>
        <Link to="/categories" onClick={() => setIsOpen(false)} className="hover:text-[#8E221F]">الفئات</Link>
        <Link to="/subscribe" onClick={() => setIsOpen(false)} className="hover:text-[#8E221F]">أشترك</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#8E221F]">تواصل معنا</Link>

    
      </div>
    </nav>
  );
}
