import DashboardLayout from "@/components/layouts/DashboardLayout/dashboardLayout";
import { ReactNode } from "react";

interface MainDashboardLayoutProps {
  children: ReactNode;
}

export default function MainDashboardLayout({
  children,
}: MainDashboardLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
