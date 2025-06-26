/* eslint-disable @next/next/no-img-element */
"use client";

import { FC, useRef, useState, useEffect } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { useAuthStore } from "@/store/userStore";

export const ProfilePhoto: FC = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user?.avatar) {
      setPreview(user.avatar);
    }
  }, [user]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);

    setUser({
      ...user!,
      avatar: url,
    });
  };

  const handleDelete = () => {
    setPreview(null);
    setUser({
      ...user!,
      avatar: "",
    });
  };

  return (
    <div className="w-full py-8 flex justify-start items-center">
      <div className="flex space-x-6 items-center justify-center">
        <div className="w-20 h-20 flex rounded-full overflow-hidden bg-gray-200">
          {preview ? (
            <img
              src={preview}
              alt="profile photo"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
              No image
            </div>
          )}
        </div>

        <div className="flex flex-col items-start justify-center space-y-4">
          <span className="text-interface2 text-sm font-medium">
            We only support .JPG, .JPEG, or .PNG file.
          </span>

          <div className="flex space-x-6 justify-center items-center">
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <Button
              variant="primary"
              className="py-3"
              onClick={() => fileInputRef.current?.click()}
            >
              Upload your photo
            </Button>

            <span
              className="text-primary cursor-pointer text-sm font-bold"
              onClick={handleDelete}
            >
              Delete Image
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
