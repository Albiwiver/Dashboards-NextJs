"use client";
import { useState, useEffect } from "react";

import { MyProfileTemplate } from "@/components/templates/MyProfileTemplate/MyProfileTemplate";
import { MyProfileSkeleton } from "@/components/templates/Skeletons/MyProfileSkeleton";

export default function MyProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <MyProfileSkeleton /> : <MyProfileTemplate />;
}
