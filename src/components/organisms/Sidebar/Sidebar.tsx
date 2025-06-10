"use client";

import { Logo } from "@/components/atoms/Logo/Logo";
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "assets/icons/dashboard-icon.svg",
  },
  {
    title: "Order Board",
    url: "/dashboard/orders",
    icon: "assets/icons/order-board-icon.svg",
  },
  {
    title: "Feed",
    url: "/dashboard/feed",
    icon: "assets/icons/feed-icon.svg",
  },
  {
    title: "Inbox",
    url: "/dashboard/inbox",
    icon: "assets/icons/inbox-icon.svg",
  },
  {
    title: "Savings",
    url: "/dashboard/savings",
    icon: "assets/icons/savings-icon.svg",
  },
  {
    title: "Sales",
    url: "/dashboard/sales",
    icon: "assets/icons/sales-icon.svg",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader />
      <Logo className="ml-10 pt-4" />
      <SidebarGroup className="mt-24">
        <SidebarGroupLabel className="ml-6.5">
          <p className="uppercase text-xs text-interface2 font-medium">
            Overview
          </p>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => {
              const isActive = pathname === item.url;

              return (
                <SidebarMenuItem className="ml-6" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-2">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                      <span
                        className={`font-urbanist text-sm font-medium transition ${
                          isActive ? "text-primary" : "text-interface1"
                        }`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarFooter />
    </Sidebar>
  );
}
