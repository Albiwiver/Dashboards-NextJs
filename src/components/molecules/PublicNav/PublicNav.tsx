import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/atoms/Button/Button";

export const publicNav = [
  {
    id: 1,
    label: "Products",
    href: "#",
  },
  {
    id: 2,
    label: "Features",
    href: "#",
  },
  {
    id: 3,
    label: "Pricing",
    href: "#",
  },
  {
    id: 4,
    label: "FAQ",
    href: "#",
  },
];

export const PublicNav = () => (
  <div className="flex items-center justify-between w-full ">
    <nav className="flex gap-12 items-center justify-center w-full">
      {publicNav.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="hover:underline text-white text-base font-urbanist"
        >
          {item.label}
        </a>
      ))}
      <Button
        variant="primary"
        className="text-base font-urbanist font-semibold cursor-pointer py-3 rounded-lg transition-colors"
      >
        EN
        <IoIosArrowDown className="inline ml-1" />
      </Button>
    </nav>
  </div>
);
