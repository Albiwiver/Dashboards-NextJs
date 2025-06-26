import { FC } from "react";
import { ProfilePhoto } from "@/components/molecules/Profile/ProfilePhoto";

import { ProfileForm } from "../ProfileForm/ProfileForm";

export const ProfileContent: FC = () => {
  return (
    <div className="container p-8 mx-auto flex space-y-2 flex-col font-urbanist rounded-md bg-white w-full h-full xl:px-12 2xl:px-16">
      <div className="w-full pb-6 flex justify-start items-center border-b-gray-100 border-b-1">
        <h4 className="text-xl font-bold text-interface1">
          Personal Informations
        </h4>
      </div>
      <ProfilePhoto />
      <ProfileForm />
    </div>
  );
};
