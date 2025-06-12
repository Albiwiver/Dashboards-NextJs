import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { FC } from "react";

type FeedDropDownProps = {
  title: string;
};

export const FeedDropDown: FC<FeedDropDownProps> = ({ title }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center bg-white px-3 py-4 rounded gap-1 text-sm text-interface2 font-urbanist cursor-pointer">
          {title} <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end"></DropdownMenuContent>
    </DropdownMenu>
  );
};
