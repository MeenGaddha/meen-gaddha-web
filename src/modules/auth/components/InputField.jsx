import React from "react";

export default function InputField({
  name,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) {
  return (
    <div className="mb-6 relative">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full border-2 rounded-xl py-3.5 pr-12 pl-4 text-lg focus:outline-none
          ${error && touched ? "border-red-500" : "border-[#CFCFCF]"}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className="absolute top-1/2 -translate-y-1/2 right-4 text-[#F7C94E] text-xl">
        {icon}
      </span>

      {error && touched && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
