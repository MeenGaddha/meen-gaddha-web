import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import { Home } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  
  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      // already on home → scroll directly
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky w-full top-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* إذا المستخدم مسجل دخول */}
          {userName ? (
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                className="w-10 h-10 rounded-xl bg-gray-200 p-1"
                alt="user"
              />
              <span className="font-semibold">{userName}</span>
            </div>
          ) : (
            <button
              className="bg-[#FECE5D] hover:bg-[#ffc439] text-black font-semibold px-6 py-2 rounded-xl transition"
              onClick={() => navigate("/login")}
            >
              سجّل دخولك
            </button>
          )}
        </div>

        {/* Links (only on desktop) */}
        <div onClick={() => scrollToSection("about")}>نبذة عنا</div>
        <div onClick={() => scrollToSection("howToPlay")}>طريقة اللعب</div>
        <div onClick={() => scrollToSection("categories")}>الفئات</div>
        <div onClick={() => scrollToSection("subscribe")}>أشترك</div>
        <div onClick={() => scrollToSection("contact")}>تواصل معنا</div>

        {/* Login button + logo */}
        <div className="hidden md:block" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="logo"
            className="w-[158.77px] h-[70px] object-contain mt-1.5 cursor-pointer"
          />
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
        <img
          src={logo}
          alt="logo"
          className=" lg:hidden items-center  w-30 h-30 object-contain"
        />
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#8E221F]"
        >
          نبذة عنا
        </Link>
        <Link
          to="/how-to-play"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#8E221F]"
        >
          طريقة اللعب
        </Link>
        <Link
          to="/categories"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#8E221F]"
        >
          الفئات
        </Link>
        <Link
          to="/subscribe"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#8E221F]"
        >
          أشترك
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#8E221F]"
        >
          تواصل معنا
        </Link>
      </div>
    </nav>
  );
}
