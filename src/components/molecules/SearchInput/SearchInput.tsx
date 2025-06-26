import { FC } from "react";
import { FiSearch } from "react-icons/fi";

type SearchInput = {
  className?: string;
  placeholder: string;
};

export const SearchInput: FC<SearchInput> = ({ className, placeholder }) => {
  return (
    <div
      className={`flex items-center bg-gray-100 rounded px-2 py-3 w-full ${className}`}
    >
      <FiSearch className="text-interface1 text-xl" />
      <input
        type="search"
        placeholder={placeholder}
        className="bg-transparent font-urbanist outline-none ml-2 text-base flex-1"
      />
    </div>
  );
};
