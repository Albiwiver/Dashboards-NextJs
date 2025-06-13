"use client";
import { Button } from "@/components/atoms/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import React from "react";

export const GoogleAppleButtons = () => {
  return (
    <div className="flex items-center justify-center space-x-8 w-full">
      <Button
        variant="secondary"
        type="button"
        className="flex items-center font-urbanist text-base justify-center gap-4 py-4.5 px-4 rounded-lg w-full"
      >
        <FcGoogle className="text-3xl" />
        Google
      </Button>
      <Button
        variant="secondary"
        type="button"
        className="flex items-center font-urbanist text-base justify-center gap-4 py-4 px-4 rounded-lg w-full"
      >
        <FaApple className="text-3xl mb-1" />
        Apple
      </Button>
    </div>
  );
};
