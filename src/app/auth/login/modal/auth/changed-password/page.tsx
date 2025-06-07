"use client";
import { Button } from "@/components/atoms/Button/Button";
import Link from "next/link";
import Image from "next/image";

export default function ChangedPasswordModal() {
  return (
    <div className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-center flex flex-col items-center justify-center shadow-lg relative">
        <Image
          src="/assets/images/password-changed-image.svg"
          alt="Changed Password"
          width={150}
          height={140}
          className="mb-6"
        />

        <h2 className="text-3xl text-center mb-4 font-urbanist font-bold text-interface1">
          Your successfully changed your password
        </h2>
        <p className="text-interface2 text-lg mb-6 font-urbanist">
          Commodo gravida eget ultricies sed in lacus. Commodo, tellus duis eros
          pellentesque.
        </p>

        <Button
          variant="primary"
          type="submit"
          className="rounded-lg px-4 py-3 transition w-full font-urbanist font-semibold text-base"
        >
          <Link href="/auth/login">Back to login</Link>
        </Button>

        <Button
          variant="secondary"
          type="button"
          className="absolute top-4 right-4 rounded-full text-gray-400 hover:text-gray-600 transition"
          onClick={() => window.history.back()}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}
