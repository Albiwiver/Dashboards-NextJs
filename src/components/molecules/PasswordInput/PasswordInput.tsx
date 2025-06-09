"use client";
import React, { useState, forwardRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input } from "@/components/atoms/Input/Input";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: string;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => setShowPassword((prev) => !prev);

    return (
      <div className="w-full">
        <div className="relative mt-4">
          <Input
            ref={ref}
            type={showPassword ? "text" : "password"}
            {...props}
            className="px-3 py-3 border font-urbanist placeholder:text-base bg-[#FAFAFA] rounded-lg w-full h-14 outline-primary border-none"
          />
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-xl text-gray-400"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
