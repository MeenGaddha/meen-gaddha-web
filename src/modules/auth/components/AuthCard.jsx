import React from "react";

export default function AuthCard({ children }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-md px-10 py-12">
      {children}
    </div>
  );
}
