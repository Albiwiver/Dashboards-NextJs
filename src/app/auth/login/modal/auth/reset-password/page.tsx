"use client";

import { PasswordInput } from "@/components/molecules/PasswordInput/PasswordInput";
import { Button } from "@/components/atoms/Button/Button";
import { useForm } from "react-hook-form";
import {
  resetPasswordSchema,
  ResetPasswordFormData,
} from "@/app/validations/resetPasswordValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { resetPassword } from "@/services/authServices";

export default function ResetPasswordModal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const onSubmit = async (data: ResetPasswordFormData) => {
    const token = searchParams.get("token");
    if (!token) {
      toast.error("reset password token expired");
      return;
    }

    try {
      await resetPassword(token, data.newPassword);

      toast.success("Password reset successfully!");
      router.push("/auth/login/modal/auth/changed-password");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data;
        const message =
          apiError?.error?.message ??
          (typeof apiError === "string" ? apiError : "An error occurred");
        toast.error(message);
      } else {
        console.error("Unknown error", error);
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 w-full max-w-md flex flex-col items-start shadow-lg relative">
        <h2 className="text-xl text-center mb-4 font-urbanist font-bold text-interface1">
          Create a new password
        </h2>
        <p className="text-interface2 text-sm mb-6 font-urbanist text-start">
          Please enter a new password. Your new password must be different from
          previous password.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <PasswordInput
            {...register("newPassword")}
            placeholder="New Password"
            className="mb-2"
            error={errors.newPassword?.message}
          />
          <PasswordInput
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="mb-4"
            error={errors.confirmPassword?.message}
          />

          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            className="py-3 transition w-full font-urbanist font-semibold text-base"
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </div>
  );
}
