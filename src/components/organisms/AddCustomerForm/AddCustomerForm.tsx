/* eslint-disable @next/next/no-img-element */
"use client";

import { Input } from "@/components/atoms/Input/Input";
import { FC } from "react";
import { useState, useEffect } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { useRef } from "react";
import { toast } from "sonner";

type Props = {
  className?: string;
  onSubmitRef?: (fn: () => void) => void;
  onImageReset?: () => void;
};

const prefixToCountry: Record<string, string> = {
  "+1": "us", // Estados Unidos, Canadá
  "+44": "gb", // Reino Unido
  "+33": "fr", // Francia
  "+49": "de", // Alemania
  "+39": "it", // Italia
  "+34": "es", // España
  "+351": "pt", // Portugal
  "+90": "tr", // Turquía
  "+81": "jp", // Japón
  "+82": "kr", // Corea del Sur
  "+86": "cn", // China
  "+7": "ru", // Rusia
  "+55": "br", // Brasil
  "+54": "ar", // Argentina
  "+57": "co", // Colombia
  "+56": "cl", // Chile
  "+51": "pe", // Perú
  "+52": "mx", // México
  "+591": "bo", // Bolivia
  "+593": "ec", // Ecuador
  "+58": "ve", // Venezuela
  "+505": "ni", // Nicaragua
  "+506": "cr", // Costa Rica
  "+507": "pa", // Panamá
  "+502": "gt", // Guatemala
  "+503": "sv", // El Salvador
  "+504": "hn", // Honduras
  "+592": "gy", // Guyana
  "+977": "np", // Nepal
  "+91": "in", // India
  "+880": "bd", // Bangladesh
  "+94": "lk", // Sri Lanka
  "+63": "ph", // Filipinas
  "+62": "id", // Indonesia
  "+60": "my", // Malasia
  "+65": "sg", // Singapur
  "+61": "au", // Australia
  "+64": "nz", // Nueva Zelanda
  "+20": "eg", // Egipto
  "+212": "ma", // Marruecos
  "+213": "dz", // Argelia
  "+216": "tn", // Túnez
  "+27": "za", // Sudáfrica
  "+254": "ke", // Kenia
  "+234": "ng", // Nigeria
  "+971": "ae", // Emiratos Árabes
  "+966": "sa", // Arabia Saudita
  "+98": "ir", // Irán
  "+964": "iq", // Irak
  "+92": "pk", // Pakistán
};

const detectCountry = (phone: string): string => {
  const normalized = phone.replace(/\s/g, "");
  const entry = Object.keys(prefixToCountry).find((prefix) =>
    normalized.startsWith(prefix)
  );
  return entry ? prefixToCountry[entry] : "us";
};

export const AddCustomerForm: FC<Props> = ({
  className,
  onSubmitRef,
  onImageReset,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("us");
  const [agreedEmail, setAgreedEmail] = useState(false);
  const [agreedSMS, setAgreedSMS] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setCountryCode(detectCountry(phone));
  }, [phone]);

  useEffect(() => {
    if (onSubmitRef && formRef.current) {
      onSubmitRef(() => {
        formRef.current?.requestSubmit();
      });
    }
  }, [onSubmitRef]);

  return (
    <div
      className={`w-full flex flex-col font-urbanist space-y-4 rounded-sm bg-white p-6 ${className}`}
    >
      <h4 className="text-lg text-start font-bold text-interface1">
        Customer Overview
      </h4>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const isFormFilled =
            firstName.trim() || lastName.trim() || email.trim() || phone.trim();

          if (!isFormFilled) {
            toast.error("Please fill in the form before saving.");
            return;
          }
          formRef.current?.reset();
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setAgreedEmail(false);
          setAgreedSMS(false);
          onImageReset?.();
          toast.success("Customer saved successfully!");
        }}
        className="flex flex-col mt-8 w-full space-y-4 "
        action=""
      >
        <div className="flex justify-center items-center space-x-4">
          <div className="flex flex-col items-start w-full justify-center space-y-4">
            <label className="text-base font-medium text-interface1" htmlFor="">
              First Name
            </label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Input>
          </div>
          <div className="flex flex-col items-start w-full justify-center space-y-4">
            <label className="text-base font-medium text-interface1" htmlFor="">
              Last Name
            </label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Input>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center space-y-4 w-full">
          <label className="text-base font-medium" htmlFor="">
            Email
          </label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </div>
        <div className="w-full flex flex-col items-start space-y-4">
          <label className="text-base text-interface1 font-medium" htmlFor="">
            Phone Number
          </label>
          <div className="flex w-full space-x-4 justify-center pb-8 border-b-1 border-b-gray-100 items-center">
            <div className="bg-gray-100 flex justify-center items-center rounded-xl h-full w-18 p-2">
              <img
                className="rounded object-cover"
                alt={`${countryCode} flag`}
                src={`https://flagcdn.com/24x18/${countryCode}.png`}
              ></img>
            </div>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder=""
            ></Input>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center mt-6 space-y-6">
          <div className="flex justify-start items-center space-x-4">
            <input
              type="checkbox"
              onChange={(e) => setAgreedEmail(e.target.checked)}
              checked={agreedEmail}
              className="w-5 h-5 rounded-full text-primary border-gray-300 focus:ring-primary"
            />
            <span className="text-sm font-medium text-interface1">
              Customer agreed to receive marketing emails
            </span>
          </div>
          <div className="flex justify-start items-center space-x-4">
            <input
              type="checkbox"
              checked={agreedSMS}
              onChange={(e) => setAgreedSMS(e.target.checked)}
              className="w-5 h-5 rounded-full text-primary border-gray-300 focus:ring-primary"
            />
            <span className="text-sm font-medium text-interface1">
              Customer agreed to receive SMS marketing text messages
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-xl flex space-x-6 py-5 px-6 justify-start items-center">
            <RiErrorWarningLine className="text-interface2 w-5 h-5" />
            <span className="text-xs font-medium">
              You should ask your customers for permission before you subscribe
              them to your marketing emails or SMS.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
