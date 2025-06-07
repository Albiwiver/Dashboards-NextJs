// src/components/layouts/AuthLayout.tsx
import { ReactNode } from "react";
import { Logo } from "@/components/atoms/Logo/Logo";
import { HeroImage } from "@/components/atoms/HeroImage/HeroImage";
import { PublicNav } from "@/components/molecules/PublicNav/PublicNav";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="h-screen w-full flex">
      <div className="flex flex-col w-1/2 h-full relative items-start justify-start bg-white py-10">
        <div className="w-3/4 mx-auto">
          <Logo className="mb-38" />
        </div>
        {children}
      </div>
      <div className="flex flex-col w-1/2 h-full bg-interface1 px-8 py-6">
        <div className="flex w-full mt-4">
          <PublicNav />
        </div>
        <div className="flex flex-col items-center justify-center h-auto w-full">
          <HeroImage
            src="/assets/images/login-corporative-image.svg"
            alt="Imagen de charts corporativos"
            className="object-cover mt-4"
          />
          <h1 className="text-4xl font-bold text-white mt-4 max-w-[500px] text-center font-urbanist">
            The perfect analytics tool for your business
          </h1>
          <p className="text-lg text-interface3 mt-4 max-w-[500px] text-center font-urbanist">
            Create an ecommerce website backed by powerful tools that help you
            find customers, drive sales, and manage your day-to-day.
          </p>
        </div>
      </div>
    </main>
  );
};
