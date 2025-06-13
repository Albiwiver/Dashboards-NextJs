"use client";

import { FeedTemplate } from "@/components/templates/FeedTemplate/FeedTemplate";
import { useEffect, useState } from "react";
import IntegrationsGridSkeleton from "@/components/templates/Skeletons/FeedSkeleton";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return loading ? <IntegrationsGridSkeleton /> : <FeedTemplate />;
}
