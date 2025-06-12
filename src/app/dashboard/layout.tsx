"use client";

import { AppSidebar } from "@/components/organisms/Sidebar/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardLayout from "@/components/layouts/DashboardLayout/dashboardLayout";
import { ReactNode } from "react";

interface MainDashboardLayoutProps {
  children: ReactNode;
}

export default function MainDashboardLayout({
  children,
}: MainDashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <DashboardLayout>{children}</DashboardLayout>
    </SidebarProvider>
  );
}
