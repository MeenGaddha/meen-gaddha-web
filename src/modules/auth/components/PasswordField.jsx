import React from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordField({
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  show,
  toggleShow,
  error,
  touched,
}) {
  return (
    <div className="mb-6 relative">
      <input
        name={name}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className={`w-full border-2 rounded-xl py-3.5 pr-12 pl-12 text-lg focus:outline-none
         ${error && touched ? "border-red-500" : "border-[#CFCFCF]"}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      <FaLock className="absolute top-1/2 -translate-y-1/2 right-4 text-[#F7C94E] text-xl" />

      <span
        onClick={toggleShow}
        className="absolute top-1/2 -translate-y-1/2 left-4 text-[#F7C94E] text-xl cursor-pointer"
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </span>

      {error && touched && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
