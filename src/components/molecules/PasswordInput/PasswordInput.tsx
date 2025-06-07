"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input } from "@/components/atoms/Input/Input";

export const PasswordInput = ({
  name = "password",
  placeholder = "Password",
  className = "",
  required = false,
}: {
  name?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-14 flex items-center relative w-full">
      <Input
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={className}
        required={required}
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
