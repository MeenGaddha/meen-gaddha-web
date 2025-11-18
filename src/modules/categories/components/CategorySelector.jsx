import React from "react";

export default function CategorySelector({ options, selected, onSelect }) {
  return (
    <div dir="rtl" className="flex justify-center gap-6 mt-8">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`relative cursor-pointer w-24 h-28 rounded-2xl shadow-md flex items-center justify-center transition-all duration-200 
            ${selected === option 
              ? "bg-[#8E221F] text-white shadow-lg scale-105" 
              : "bg-white text-[#8E221F] hover:shadow-lg hover:scale-105"
            }`}
        >
          {/* Big Number */}
          <span className="text-6xl font-bold">{option}</span>

          {/* Vertical Arabic Text */}
          <span className="absolute right-0.5 top-1/2 -translate-y-1/2 rotate-90 origin-center text-lg font-semibold">
            فئات
          </span>
        </button>
      ))}
    </div>
  );
}
