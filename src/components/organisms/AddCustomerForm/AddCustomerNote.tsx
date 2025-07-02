"use client";
import { Input } from "@/components/atoms/Input/Input";
import { FC, useEffect, useState } from "react";

type Props = {
  className?: string;
  onResetRef?: (fn: () => void) => void;
};

export const AddCustomerNote: FC<Props> = ({ className, onResetRef }) => {
  const [note, setNote] = useState("");

  useEffect(() => {
    if (onResetRef) {
      onResetRef(() => setNote(""));
    }
  }, [onResetRef]);

  return (
    <div
      className={`w-full h-full bg-white flex flex-col space-y-4 p-6 rounded-md ${className}`}
    >
      <div className="w-full flex flex-col items-start space-y-4 justify-center">
        <span className="text-interface1 text-lg font-bold">Notes</span>
        <span className="text-interface1 text-sm">
          Add note about your customer
        </span>
      </div>
      <Input value={note} onChange={(e) => setNote(e.target.value)} />
    </div>
  );
};
