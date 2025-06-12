import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

export const OverallSalesChartSkeleton: FC = () => {
  return (
    <div className="p-4 rounded-2xl shadow bg-muted/40 space-y-3 h-full">
      <Skeleton className="h-10 w-36" />
      <div className="grid grid-cols-12 gap-2">
        {[...Array(12)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    </div>
  );
};
