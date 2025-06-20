"use client";

import { ReactNode } from "react";
import { useAuthStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ProfileInfo } from "@/components/molecules/ProfileInfo/ProfileInfo";
import { ProfileNotifications } from "@/components/molecules/ProfileNotifications/ProfileNotifications";
import { SearchInput } from "@/components/molecules/SearchInput/SearchInput";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, hasHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (hasHydrated && !user?.token) {
      router.push("/auth/login");
    }
  }, [hasHydrated, user, router]);

  if (!hasHydrated) return null;

  return (
    <div className="flex flex-col flex-1">
      <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white">
        <SidebarTrigger className="mr-8" />
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-2xl font-semibold font-urbanist">
            Hi, {user?.name} {user?.lastName}
          </h1>
          <p className="text-sm text-interface2">
            Let’s check your store today
          </p>
        </div>
        <SearchInput placeholder="Search..." className="rounded-2xl" />
        <div className="flex items-center gap-4">
          <ProfileNotifications />
          <ProfileInfo />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
