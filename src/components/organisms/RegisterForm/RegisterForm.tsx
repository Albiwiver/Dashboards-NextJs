"use client";

import { Input } from "@/components/atoms/Input/Input";
import { PasswordInput } from "@/components/molecules/PasswordInput/PasswordInput";
import { Button } from "@/components/atoms/Button/Button";
import { GoogleAppleButtons } from "../../molecules/GoogleAppleButtons/GoogleAppleButtons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  RegisterFormData,
} from "@/app/validations/authValidation";
import { createUser } from "@/services/auth";
import { useAuthStore } from "@/store/userStore";

export const RegisterForm = () => {
  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const newUser = await createUser({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });

      setUser({
        id: newUser.id,
        name: newUser.name,
        lastName: newUser.lastName,
        email: newUser.email,
        token: newUser.token,
      });

      reset();
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      // Puedes mostrar un toast de error aquí
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 w-3/4 mx-auto"
    >
      <h3 className="text-interface1 font-bold text-3xl font-poppins mb-12">
        Create your ZoSale ID
      </h3>

      <div className="flex w-full items-center justify-center space-x-8 mb-6">
        <Input
          {...register("name")}
          placeholder="First Name"
          className="mb-2 py-4"
        />
        <Input
          {...register("lastName")}
          placeholder="Last Name"
          className="mb-2 py-4"
        />
      </div>
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}
      {errors.lastName && (
        <p className="text-red-500 text-sm">{errors.lastName.message}</p>
      )}

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
        name="password"
        placeholder="Password"
        className="mt-4 py-4"
        register={register("password")}
        error={errors.password?.message}
      />

      <div className="flex items-center text-sm my-4">
        <label className="flex items-center gap-2 cursor-pointer font-urbanist text-interface1">
          <input
            type="checkbox"
            className="accent-primary rounded-full w-4 h-4"
            {...register("termsAccepted")}
          />
          By proceeding you agree to the
        </label>
        <a
          href="#"
          className="text-primary font-urbanist hover:underline font-medium"
        >
          Terms and conditions
        </a>
      </div>
      {errors.termsAccepted && (
        <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>
      )}

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
        Already have an account?
        <Link
          href="/auth/login"
          className="font-urbanist text-primary text-base ml-1 hover:underline font-medium"
        >
          Get started
        </Link>
      </h4>
    </form>
  );
};
