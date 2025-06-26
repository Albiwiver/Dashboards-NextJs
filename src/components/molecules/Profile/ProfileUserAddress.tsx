/* eslint-disable @next/next/no-img-element */
"use client";

import { FC, useMemo } from "react";
import { Input } from "@/components/atoms/Input/Input";
import countries from "world-countries";

type ProfileUserAddressProps = {
  country: string;
  city: string;
  address: string;
  postalCode?: string;
  setCountry: (value: string) => void;
  setCity: (value: string) => void;
  setAddress: (value: string) => void;
  setPostalCode: (value: string) => void;
};

const formattedCountries = countries.map((c) => ({
  name: c.name.common,
  code: c.cca2,
}));

const getFlagUrl = (code: string) =>
  `https://flagcdn.com/w40/${code.toLowerCase()}.png`;

export const ProfileUserAddress: FC<ProfileUserAddressProps> = ({
  country,
  city,
  address,
  postalCode,
  setCountry,
  setCity,
  setAddress,
  setPostalCode,
}) => {
  const selectedCountry = useMemo(
    () =>
      formattedCountries.find(
        (c) => c.name.toLowerCase() === country.toLowerCase()
      ),
    [country]
  );

  return (
    <div className="w-full space-y-4 flex flex-col font-urbanist">
      <div className="w-full flex space-x-8 items-center">
        <div className="flex flex-col space-y-2 w-full relative">
          <label className="text-interface2 text-base font-medium">
            Country or Region
          </label>
          <div className="relative">
            <Input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="pl-12"
            />
            {selectedCountry && (
              <img
                src={getFlagUrl(selectedCountry.code)}
                alt="flag"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded shadow-sm"
              />
            )}
          </div>
        </div>

        {/* City */}
        <div className="flex flex-col space-y-2 w-full">
          <label className="text-interface2 text-base font-medium">City</label>
          <Input value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
      </div>

      <div className="w-full flex space-x-8 items-center">
        {/* Address */}
        <div className="flex flex-col space-y-2 w-full">
          <label className="text-interface2 text-base font-medium">
            Address
          </label>
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        {/* Postal Code */}
        <div className="flex flex-col space-y-2 w-full">
          <label className="text-interface2 text-base font-medium">
            Postal Code
          </label>
          <Input
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
