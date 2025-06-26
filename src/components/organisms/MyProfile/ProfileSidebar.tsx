import Image from "next/image";
import { FC } from "react";

export const profileSidebarConfig = [
  {
    id: "personal-information",
    title: "Personal Informations",
    description: "Est arcu pharetra proin pellentesque",
    icon: "/assets/profileIcons/user-profile-icon.svg",
  },
  {
    id: "login-services",
    title: "Login Services",
    description: "Est arcu pharetra proin pellentesque",
    icon: "/assets/profileIcons/login-profile-icon.svg",
  },
  {
    id: "program-resources",
    title: "Program & Resources",
    description: "Est arcu pharetra proin pellentesque",
    icon: "/assets/profileIcons/program-profile-icon.svg",
  },
  {
    id: "preferred-language",
    title: "Preffered Language",
    description: "Est arcu pharetra proin pellentesque",
    icon: "/assets/profileIcons/language-profile-icon.svg",
  },
  {
    id: "timezone",
    title: "Timezone",
    description: "Est arcu pharetra proin pellentesque",
    icon: "/assets/profileIcons/timezone-profile-icon.svg",
  },
  {
    id: "security",
    title: "Security",
    description: "Est arcu pharetra proin pellentesque",
    icon: "/assets/profileIcons/security-profile-icon.svg",
  },
];

export const ProfileSidebar: FC = () => {
  return (
    <div className="flex flex-col space-y-2 font-urbanist w-full">
      {profileSidebarConfig.map((item, index) => (
        <div
          key={item.id}
          className={`flex items-start justify-center w-full gap-2 px-2 py-4 rounded-lg cursor-pointer transition 
            ${index === 0 ? "bg-gray-300" : "hover:bg-gray-300"}
          `}
        >
          <div className="bg-gray-100 rounded-full flex items-center justify-center">
            <Image src={item.icon} alt={item.title} width={64} height={64} />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <span className="text-sm font-bold text-interface1">
              {item.title}
            </span>
            <span className="text-xs text-interface2 leading-tight">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
