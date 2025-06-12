"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const DashboardHomeSkeleton = () => {
  return (
    <section className="p-6 bg-gray-100 w-full h-full">
      <div className="grid grid-cols-3 grid-rows-4 gap-6 w-full min-h-screen">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-full w-full rounded-lg" />
        ))}

        <div className="col-span-1 row-span-2 col-start-3 row-start-1 h-full">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>

        <div className="col-span-3 row-span-2">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};
