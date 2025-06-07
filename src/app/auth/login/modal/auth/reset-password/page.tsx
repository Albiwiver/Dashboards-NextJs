"use client";
import { PasswordInput } from "@/components/molecules/PasswordInput/PasswordInput";
import { Button } from "@/components/atoms/Button/Button";
import Link from "next/link";

export default function ResetPasswordModal() {
  return (
    <div className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 h-auto w-full max-w-md flex flex-col items-start shadow-lg relative">
        <h2 className="text-xl text-center mb-4 font-urbanist font-bold text-interface1">
          Create a new password
        </h2>
        <p className="text-interface2 text-sm mb-6 font-urbanist text-start">
          Please enter a new password. Your new password must be different from
          previous password.
        </p>

        <form className="flex flex-col gap-4 w-full">
          <PasswordInput
            name="newPassword"
            placeholder="New Password"
            className="mb-2"
            required
          />
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm Password"
            className="mb-4"
            required
          />

          <Button
            variant="primary"
            type="submit"
            className="py-3 transition w-full font-urbanist font-semibold text-base"
          >
            <Link href="auth/reset-password">Reset Password</Link>
          </Button>
        </form>
      </div>
    </div>
  );
}
