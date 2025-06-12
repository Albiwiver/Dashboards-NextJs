import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

export const SalesReportCardSkeleton: FC = () => {
  return (
    <div className="p-4 rounded-2xl shadow bg-muted/40 flex flex-col items-center justify-center space-y-4 h-full">
      <Skeleton className="h-32 w-32 rounded-full" />
      <Skeleton className="h-4 w-28" />
    </div>
  );
};
