"use client";

import { Logo } from "@/components/atoms/Logo/Logo";
import { Input } from "@/components/atoms/Input/Input";
import { Button } from "@/components/atoms/Button/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import {
  forgotPasswordSchema,
  ForgotPasswordFormData,
} from "@/app/validations/forgotPasswordValidation";
import axios from "axios";
import { forgotPassword } from "@/services/authServices";

export default function ForgotPasswordModal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const [serverError, setServerError] = useState<string | undefined>(undefined);
  const [sent, setSent] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      setServerError(undefined);

      const forgotUrl = await forgotPassword(data.email);
      setPreviewUrl(forgotUrl.previewUrl);

      toast.success("Reset link sent to your email!");
      setSent(true);
      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data;
        setServerError(apiError?.error?.message ?? "Invalid credentials");
      } else {
        console.error("Unknown error", error);
        setServerError("An unexpected error occurred");
        toast.error("An unexpected error occurred");
      }
    }
  };

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

        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {sent ? (
            <p className="text-interface1 font-urbanist text-sm text-start">
              <a
                href={previewUrl}
                className="text-primary text-base font-urbanist font-bold cursor-pointer"
              >
                Click here
              </a>{" "}
              to change your password
            </p>
          ) : (
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3"
            />
          )}

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

          <p className="text-primary font-urbanist text-sm my-2">
            <Link href="/auth/login" className="text-primary hover:underline">
              Return to login
            </Link>
          </p>

          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg px-4 py-3 transition w-full font-urbanist font-semibold text-base"
          >
            {isSubmitting ? "Sending..." : "Continue"}
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
