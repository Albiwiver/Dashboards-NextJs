// components/templates/Skeletons/OrdersTableSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const OrdersBoardSkeleton = () => {
  return (
    <section className="p-6 bg-white w-full h-full rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-6 w-32" />
        <div className="flex gap-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-28" />
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-6 gap-4 p-4 border-b">
          {["Status", "Transaction ID", "Date", "From", "To", "Amount"].map(
            (header, idx) => (
              <Skeleton key={idx} className="h-5 w-24" />
            )
          )}
        </div>

        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-4 p-4 items-center border-b"
          >
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </section>
  );
};
