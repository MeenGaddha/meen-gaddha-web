import React from "react";

export default function CategoryCard({ title, img, selected, disabled, onSelect }) {
  return (
    <div
      onClick={!disabled ? onSelect : undefined} // if completed selecting
      className={`rounded-xl border-2 p-4 flex flex-col items-center gap-3 transition duration-200
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105"}
        ${// to disable the user to choose more than the selected categories (4, 6, or 8)
          selected
            ? "border-[#8E221F] bg-[#8E221F]/5"
            : "border-transparent bg-white hover:border-[#8E221F]/40"
        }`}
    >
      <img
        src={img}
        alt={title}
        className="w-20 h-20 object-contain"
        loading="lazy"
      />
      <p className="text-[#8E221F] font-semibold text-center text-lg">{title}</p>
    </div>
  );
}
