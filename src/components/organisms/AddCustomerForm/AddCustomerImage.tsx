"use client";

import { FC, useRef, useState, useEffect } from "react";
import { Button } from "@/components/atoms/Button/Button";
import Image from "next/image";

type Props = {
  className?: string;
  onResetRef?: (fn: () => void) => void;
};

export const AddCustomerImage: FC<Props> = ({ className, onResetRef }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  // Registrar la función de reset con el padre
  useEffect(() => {
    if (onResetRef) {
      onResetRef(() => {
        setImagePreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      });
    }
  }, [onResetRef]);

  return (
    <div
      className={`w-full h-full flex bg-white flex-col p-6 items-start justify-center rounded-md space-y-4 ${className}`}
    >
      <h4 className="text-interface1 text-lg font-bold">Customer Image</h4>

      <div className="w-full h-full flex flex-col items-center justify-center space-y-8 rounded bg-gray-100 py-8">
        <div className="h-20 w-20 flex justify-center items-center rounded-full overflow-hidden">
          {imagePreview ? (
            <Image
              width={80}
              height={80}
              alt="uploaded"
              src={imagePreview}
              className="object-cover rounded-full"
            />
          ) : (
            <Image
              width={80}
              height={80}
              alt="add image icon"
              src="/assets/customerIcons/add-image-icon.svg"
            />
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        />

        <Button
          variant="primary"
          className="text-sm font-bold px-6 py-3"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload Image
        </Button>
      </div>
    </div>
  );
};
