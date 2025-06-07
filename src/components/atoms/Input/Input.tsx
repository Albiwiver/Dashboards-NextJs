"use client";
import React from "react";

type InputProps = {
  name?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
};

export const Input: React.FC<InputProps> = ({
  name = "",
  id = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  required = false,
}) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`px-3 py-3 border font-urbanist placeholder:text-base bg-[#FAFAFA] rounded-lg w-full h-14 outline-primary border-none ${className}`}
    />
  );
};
