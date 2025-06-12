"use client";
import DashboardHomeSkeleton from "@/components/templates/Skeletons/DashboardHomeSkeleton";
import { useEffect, useState } from "react";
import { DashboardHome } from "@/components/templates/DashboardHome/DashboardHome";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <DashboardHomeSkeleton /> : <DashboardHome />;
}
