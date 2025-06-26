"use client";

import { ProfileInfo } from "@/components/molecules/ProfileInfo/ProfileInfo";
import { ProfileNotifications } from "@/components/molecules/ProfileNotifications/ProfileNotifications";
import { SearchInput } from "@/components/molecules/SearchInput/SearchInput";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { FC } from "react";
import { useAuthStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const NavBar: FC = () => {
  const { user, hasHydrated } = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    if (hasHydrated && !user?.token) {
      router.push("/auth/login");
    }
  }, [hasHydrated, user, router]);

  if (!hasHydrated || !user?.token) return null;
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <SidebarTrigger className="mr-8" />
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl font-semibold font-urbanist">
          Hi, {user?.name} {user?.lastName}
        </h1>
        <p className="text-sm text-interface2">Let’s check your store today</p>
      </div>
      <SearchInput
        placeholder="Search..."
        className="rounded-2xl max-w-md mx-8 flex-1"
      />
      <div className="flex items-center gap-4">
        <ProfileNotifications />
        <ProfileInfo />
      </div>
    </header>
  );
};
