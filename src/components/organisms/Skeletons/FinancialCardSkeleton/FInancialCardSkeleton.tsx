import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

export const FinancialCardSkeleton: FC = () => {
  return (
    <div className="p-4 rounded-2xl shadow bg-muted/40 space-y-4">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-10 w-10 rounded-full ml-auto" />
    </div>
  );
};
