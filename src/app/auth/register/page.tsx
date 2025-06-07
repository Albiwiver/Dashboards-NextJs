import { AuthLayout } from "@/components/layouts/AuthLayout/authLayout";
import { RegisterForm } from "@/components/organisms/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
