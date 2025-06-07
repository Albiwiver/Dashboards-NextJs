"use client";
import { Logo } from "@/components/atoms/Logo/Logo";
import { Input } from "@/components/atoms/Input/Input";
import { Button } from "@/components/atoms/Button/Button";
import Link from "next/link";

export default function ForgotPasswordModal() {
  return (
    <div className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 w-full max-w-md flex flex-col items-start shadow-lg relative">
        <Logo className="mb-8" />

        <h2 className="text-xl text-center mb-4 font-urbanist font-bold text-interface1">
          Reset your password
        </h2>
        <p className="text-interface2 text-sm mb-4 font-urbanist text-start">
          Enter the email address associated with your account and we´ll send
          you a link to reset your password.
        </p>

        <form className="flex flex-col gap-4 w-full">
          <Input
            name="email"
            required
            type="email"
            placeholder="Enter your email"
            className=" px-4 py-3"
          />

          <p className="text-primary font-urbanist text-sm my-2">
            <Link href="/auth/login" className="text-primary hover:underline">
              Return to login
            </Link>
          </p>

          <Button
            variant="primary"
            type="submit"
            className="rounded-lg px-4 py-3 transition w-full font-urbanist font-semibold text-base"
          >
            Continue
          </Button>
        </form>

        <Button
          variant="secondary"
          type="button"
          className="absolute top-4 right-4 rounded-full text-gray-400 hover:text-gray-600 transition"
          onClick={() => window.history.back()}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}
