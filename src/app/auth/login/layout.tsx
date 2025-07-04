import { AuthLayout } from "@/components/layouts/AuthLayout/authLayout";
import { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
}
