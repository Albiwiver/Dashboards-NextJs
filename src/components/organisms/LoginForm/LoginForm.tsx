"use client";

import Link from "next/link";
import { setCookie } from "cookies-next";
import { Input } from "@/components/atoms/Input/Input";
import { PasswordInput } from "@/components/molecules/PasswordInput/PasswordInput";
import { Button } from "@/components/atoms/Button/Button";
import { GoogleAppleButtons } from "../../molecules/GoogleAppleButtons/GoogleAppleButtons";
import { getUser } from "@/services/authServices";
import { useAuthStore } from "@/store/userStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/app/validations/loginValidation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const { setUser, user } = useAuthStore();
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (user?.token) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (loggedData: LoginFormData) => {
    try {
      const { data } = await getUser(loggedData.email, loggedData.password);
      console.log("Logged user:", data);

      setCookie("token", data.token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      setUser({
        id: data.user.id,
        name: data.user.name,
        lastName: data.user.lastName,
        email: data.user.email,
        token: data.token,
        avatar: data.user?.avatar,
      });

      setError(undefined);
      console.log("User logged in successfully!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data;
        setError(apiError?.error?.message ?? "Invalid credentials");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 w-3/4 mx-auto"
    >
      <h3 className="text-interface1 font-bold text-3xl font-poppins mb-12">
        Login to your account
      </h3>

      <Input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="mb-2 py-4"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <PasswordInput
        placeholder="Password"
        className="mt-4 py-4"
        {...register("password")}
        error={errors.password?.message}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex items-center justify-between text-sm my-4">
        <label className="flex items-center gap-2 cursor-pointer font-urbanist text-interface1">
          <input
            type="checkbox"
            className="accent-primary rounded-full w-4 h-4"
          />
          Remember me
        </label>

        <Link
          href="/auth/login/modal/auth/forgot-password"
          className="text-primary font-urbanist hover:underline font-medium"
        >
          Forgot your password?
        </Link>
      </div>

      <Button
        variant="primary"
        type="submit"
        className="mt-4 text-base font-urbanist font-semibold py-4 px-4 rounded-lg transition-colors"
      >
        Sign in with email
      </Button>

      <div className="flex items-center my-6 gap-2 text-sm text-gray-400">
        <span className="flex-1 border-t border-gray-200"></span>
        <span className="text-base px-8 font-urbanist">Or login with</span>
        <span className="flex-1 border-t border-gray-200"></span>
      </div>

      <GoogleAppleButtons />

      <h4 className="text-base text-gray-500 font-urbanist mt-4 tracking-wide">
        Don´t have an account?
        <Link
          href="/auth/register"
          className="font-urbanist text-primary text-base ml-1 hover:underline font-medium"
        >
          Get started
        </Link>
      </h4>
    </form>
  );
};
