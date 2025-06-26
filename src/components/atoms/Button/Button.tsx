"use client";
import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  disabled?: boolean;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "px-4 py-2 rounded font-semibold cursor-pointer font-urbanist focus:outline-none transition-colors";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/60",
    secondary:
      "bg-gray-200 bg-white border border-gray-300 text-interface1 text-interface1 hover:bg-gray-300",
    tertiary:
      "bg-white text-primary font-urbanist font-semibold cursor-pointer px-4 py-2 rounded border border-primary",
    quaternary:
      "text-interface1 bg-white rounded px-4 py-2 flex justify-center items-center space-x-4 hover:text-primary font-urbanist font-semibold cursor-pointer",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};
