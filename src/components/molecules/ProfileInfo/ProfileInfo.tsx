import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useAuthStore } from "@/store/userStore";
import React from "react";
import { IoMdLogOut } from "react-icons/io";

export const ProfileInfo = () => {
  const { user, logout } = useAuthStore((state) => state);

  const getInitials = () => {
    if (!user) return "";
    const firstInitial = user.name?.charAt(0) || "";
    const lastInitial = user.lastName?.charAt(0) || "";
    return (firstInitial + lastInitial).toUpperCase();
  };

  return (
    <div className="flex items-center justify-center space-x-6">
      <div className="rounded-full w-12 h-12 bg-greyUi flex items-center justify-center text-white font-semibold">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {user?.avatar ? (
              <Image
                src={user.avatar}
                alt="Profile"
                className="rounded-full h-full w-full cursor-pointer object-cover"
                width={48}
                height={48}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full rounded-full bg-primary cursor-pointer">
                {getInitials()}
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Manage Store</DropdownMenuItem>
            <DropdownMenuItem
              onClick={logout}
              className="flex items-center gap-2 text-red-500"
            >
              <IoMdLogOut className="text-red-500 text-lg" />
              Logout
            </DropdownMenuItem>
            <div className="border-t my-2"></div>
            <DropdownMenuItem>Privacy policy</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col space-y-2 items-start justify-center">
        <h4 className="text-interface1 text-base font-bold font-urbanis">
          {user?.name} {user?.lastName}
        </h4>
        <h5 className="text-interface2 text-xs font-medium font-urbanist">
          Digital Creator
        </h5>
      </div>
    </div>
  );
};
