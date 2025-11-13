import React, { useState } from "react";

export default function Popup({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      dir="rtl"
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Popup Card */}
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-2xl border-2 border-[#C32729] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-[#C32729] rounded-full cursor-auto hover:text-black text-2xl h-8 w-8"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
          جاهزين نولّع التحدي؟ 🔥
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-center mb-8">
          رتّبوا فريقكم وحدّدوا الجولة وخلونا نشوف مين قدّها 👊
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* اسم اللعبة */}
          <div className="text-center">
            <label className="block text-black font-semibold text-lg mb-2">
              اسم اللعبة 🕹️
            </label>
            <input
              type="text"
              placeholder="سمّوها بطريقتكم!"
              className="w-[60%] border border-black rounded-full py-3 text-center text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C32729] transition"
            />
          </div>

          {/* أسماء الفرق */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            <div className="text-center">
              <label className="block text-black font-semibold text-lg mb-2">
                الفريق الأول 💪
              </label>
              <input
                type="text"
                placeholder="اسم الفريق"
                className="w-full border border-black rounded-full px-6 py-3 text-center text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C32729] transition"
              />
            </div>

            <div className="text-center">
              <label className="block text-black font-semibold text-lg mb-2">
                الفريق الثاني 💪
              </label>
              <input
                type="text"
                placeholder="اسم الفريق"
                className="w-full border border-black rounded-full px-6 py-3 text-center text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C32729] transition"
              />
            </div>
          </div>

          <div className="relative w-[80%] sm:w-[60%] md:w-[50%] mx-auto mt-4">
            {/* Dropdown header */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="border border-black rounded-t-2xl px-4 py-3 text-center cursor-pointer hover:border-[#8E221F] transition bg-white"
            >
              <span className="text-[#C32729] text-lg flex justify-center items-center gap-2">
                {selectedOption
                  ? `${selectedOption} أسئلة`
                  : "كم سؤال تبغون تتحدون فيه؟"}
                <span className="text-xl">🤔</span>
                <span
                  className={`ml-2 text-black transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </span>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute left-0 right-0 mt-1 bg-white rounded-b-2xl shadow-md overflow-hidden z-10 border border-t-0 border-black">
                {[
                  { value: 4, label: "⚡ 4 أسئلة — خفيفة وسريعة" },
                  { value: 6, label: "🔥 6 أسئلة — متوسطة" },
                  { value: 8, label: "💀 8 أسئلة — تحدي الجامدين فقط" },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleSelect(item.value)}
                    className={`block w-full text-center px-4 py-3 cursor-auto font-semibold transition-all duration-200 ${
                      selectedOption === item.value
                        ? "bg-[#C32729] text-white"
                        : "bg-white text-black hover:bg-[#C32729] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* زر البدء */}
          <div className="text-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#C32729] hover:bg-[#8E221F] text-white font-semibold px-8 py-3 cursor-pointer rounded-xl transition duration-300 mt-6"
            >
              ابدأ اللعب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
