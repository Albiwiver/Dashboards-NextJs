import { FiSearch } from "react-icons/fi";

export const ProfileSearchInput = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-2xl px-2 py-3 flex-1 max-w-md mx-8">
      <FiSearch className="text-interface1 text-xl" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent font-urbanist outline-none ml-2 text-base flex-1"
      />
    </div>
  );
};
