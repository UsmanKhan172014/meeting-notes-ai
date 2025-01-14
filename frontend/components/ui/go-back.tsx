"use client";
import React from "react";
import { useAdmin } from "@/context/AdminContext";

function GoBack() {
  const { goBack } = useAdmin();

  return (
    <span className="me-2 cursor-pointer" onClick={goBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path
          d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export default GoBack;
