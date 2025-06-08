"use client";

import { ChangeEvent, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input } from "@/components/atoms/Input/Input";

export const PasswordInput = ({
  name = "password",
  placeholder = "Password",
  className = "",
  required = false,
  value = "",
  onChange,
}: {
  name?: string;
  placeholder?: string;
  className?: string;
  value: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`h-14 flex items-center relative w-full ${className}`}>
      <Input
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-0 right-3 text-gray-400 hover:text-gray-600"
      >
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
};
