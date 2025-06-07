import { AuthLayout } from "@/components/layouts/AuthLayout/authLayout";
import { ReactNode } from "react";

export default function LoginLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="flex">
      <AuthLayout>
        {children}
        {modal}
      </AuthLayout>
    </div>
  );
}
