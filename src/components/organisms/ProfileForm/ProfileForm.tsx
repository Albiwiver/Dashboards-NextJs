"use client";

import { FC, useState, useEffect } from "react";
import { useAuthStore } from "@/store/userStore";
import { ProfileUserInfo } from "@/components/molecules/Profile/ProfileUserInfo";
import { ProfileUserAddress } from "@/components/molecules/Profile/ProfileUserAddress";
import { Button } from "@/components/atoms/Button/Button";
import { toast } from "sonner";

export const ProfileForm: FC = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.name || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setCountry(user.country || "");
      setCity(user.city || "");
      setAddress(user.address || "");
      setPostalCode(user.postalCode || "");
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    setUser({
      ...user,
      name: firstName,
      lastName,
      email,
      phone,
      country,
      city,
      address,
      postalCode,
    });

    toast.success("Profile updated successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col space-y-6 text-start font-urbanist"
    >
      <ProfileUserInfo
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      />

      <h4 className="text-interface1 font-bold text-xl">Personal Address</h4>

      <ProfileUserAddress
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
        address={address}
        setAddress={setAddress}
        postalCode={postalCode}
        setPostalCode={setPostalCode}
      />

      <div className="w-full flex justify-end items-center">
        <Button
          type="submit"
          variant="primary"
          className="py-3 text-sm font-bold"
        >
          Edit Profile
        </Button>
      </div>
    </form>
  );
};
