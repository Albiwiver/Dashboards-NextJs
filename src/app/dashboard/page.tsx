"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuthStore } from "@/store/userStore";

export default function DashboardPage() {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("auth/login");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <button
        onClick={handleLogout}
        type="button"
        className="w-1/9 cursor-pointer bg-red-500"
      >
        salir
      </button>
    </div>
  );
}
