import { Skeleton } from "@/components/ui/skeleton";

export const IntegrationCardSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 bg-muted/40 rounded-2xl shadow space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        <Skeleton className="h-5 w-10 rounded-full" />
      </div>

      <Skeleton className="h-4 w-full" />

      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
};
