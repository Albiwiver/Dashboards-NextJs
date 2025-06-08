"use client";
import React, { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      {...props}
      className={`px-3 py-3 border font-urbanist placeholder:text-base bg-[#FAFAFA] rounded-lg w-full h-14 outline-primary border-none ${className}`}
    />
  )
);

Input.displayName = "Input";
