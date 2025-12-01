import React from "react";
import { HiArrowLeft } from "react-icons/hi"; // icon for leaving

export default function GameHeader({
  sessionName = "جلسة اللعبة",
  teamLabel = "دور الفريق الأول",
  onLeave = () => {},
}) {
  return (
    <header className="w-full bg-[#8E221F] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* LEFT — Leave Game Button */}
        <button
          onClick={onLeave}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <HiArrowLeft size={20} />
          <span className="text-sm font-medium">إنهاء اللعبة</span>
        </button>

        {/* CENTER — Session Name */}
        <h1 className="text-base sm:text-lg font-semibold text-center flex-1">
          {sessionName}
        </h1>

        {/* RIGHT — Team Indicator */}
        <div>
          <span className="bg-white text-[#8E221F] text-xs sm:text-sm font-medium px-3 py-2 rounded-lg shadow">
            {teamLabel}
          </span>
        </div>

      </div>
    </header>
  );
}
