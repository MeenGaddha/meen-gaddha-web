import React from "react";

export default function ErrorMessage({ message }) {
  if (!message) return null;

  return <p className="text-sm text-red-600 mb-4 text-center">{message}</p>;
}
