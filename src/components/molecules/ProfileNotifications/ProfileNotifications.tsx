import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { GoMail } from "react-icons/go";
import { FiBell } from "react-icons/fi";

export const ProfileNotifications = () => {
  return (
    <div className="flex items-center justify-center space-x-8 pr-4 py-3 border-r-2 border-greyUi">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <GoMail className="text-interface1 text-xl cursor-pointer" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuItem>Inbox</DropdownMenuItem>
          <DropdownMenuItem>Sent</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <FiBell className="text-interface1 text-xl cursor-pointer" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuItem>Notifications</DropdownMenuItem>
          <DropdownMenuItem>Mark all as read</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
