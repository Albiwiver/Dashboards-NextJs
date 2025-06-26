import React, { FC } from "react";

import { ProfileContent } from "@/components/organisms/MyProfile/ProfileContent";
import { ProfileSidebar } from "@/components/organisms/MyProfile/ProfileSidebar";

export const MyProfileTemplate: FC = () => {
  return (
    <section className="flex h-full w-full">
      <aside className="w-1/4 p-4 bg-white flex flex-col space-y-4">
        <ProfileSidebar />
      </aside>
      <main className="flex-1 px-6 py-8 bg-gray-100">
        <ProfileContent />
      </main>
    </section>
  );
};
