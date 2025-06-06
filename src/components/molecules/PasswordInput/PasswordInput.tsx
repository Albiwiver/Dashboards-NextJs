"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input } from "@/components/atoms/Input/Input";

export const PasswordInput = ({
  name = "password",
  placeholder = "Password",
  className = "",
}: {
  name?: string;
  placeholder?: string;
  className?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={className}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-11 right-4 flex items-center justify-center text-gray-400 hover:text-gray-600"
      >
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
};
