"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const MyProfileSkeleton = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <aside className="w-64 p-6 bg-white border-r border-gray-200 space-y-4">
        <Skeleton className="h-10 w-32 mb-6" />
        <div className="space-y-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="w-32 h-4" />
            </div>
          ))}
        </div>
        <Skeleton className="w-full h-20 mt-6" />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <Skeleton className="w-40 h-6" />
          <div className="flex items-center space-x-4">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="w-24 h-4" />
          </div>
        </header>

        <main className="p-10 flex flex-col space-y-8">
          <Skeleton className="w-60 h-6" />

          <div className="bg-white p-6 rounded-xl shadow space-y-6 w-full max-w-4xl">
            <div className="flex items-center space-x-6">
              <Skeleton className="w-20 h-20 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="w-40 h-8" />
                <Skeleton className="w-24 h-4" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>

            <Skeleton className="w-60 h-6" />
            <div className="grid grid-cols-2 gap-6">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full col-span-2" />
              <Skeleton className="h-10 w-full col-span-2" />
            </div>

            <div className="flex justify-end">
              <Skeleton className="w-32 h-10" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
