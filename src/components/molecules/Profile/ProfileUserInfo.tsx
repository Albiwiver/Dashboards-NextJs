"use client";

import { FC } from "react";
import { Input } from "@/components/atoms/Input/Input";

type ProfileUserInfoProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
};

export const ProfileUserInfo: FC<ProfileUserInfoProps> = ({
  firstName,
  lastName,
  email,
  phone,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
}) => {
  return (
    <div className="w-full space-y-4 flex flex-col font-urbanist">
      <div className="w-full flex space-x-8 items-center ">
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="" className="text-interface2 text-base font-medium">
            First Name
          </label>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="" className="text-interface2 text-base font-medium">
            last Name
          </label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full flex space-x-8 items-center ">
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="" className="text-interface2 text-base font-medium">
            Email
          </label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="" className="text-interface2 text-base font-medium">
            Phone Number (Optional)
          </label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
    </div>
  );
};
