import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function CategoryAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-lg border transition duration-200 overflow-hidden ${
        isOpen
          ? "bg-[#8E221F]/5 border-[#8E221F] shadow-md"
          : "bg-gray-50 border-gray-200 hover:border-[#8E221F]/30"
      }`}
    >
      {/* Accordion header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center px-5 py-4 cursor-pointer text-right transition-colors ${
          isOpen ? "bg-[#8E221F] text-white" : "bg-transparent text-[#8E221F]"
        }`}
      >
        <span className="font-semibold text-lg">{title}</span>
        {isOpen ? (
          <Minus size={20} className="text-white" />
        ) : (
          <Plus size={20} className="text-[#8E221F]" />
        )}
      </button>

      {/* Accordion content (with fade + height animation) */}
      <div
        className={`bg-[#FFF5F5] px-6 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-[999px] py-6"
            : "opacity-0 max-h-0 py-0 pointer-events-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
