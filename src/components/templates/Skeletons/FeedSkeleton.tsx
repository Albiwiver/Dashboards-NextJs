import { IntegrationCardSkeleton } from "@/components/organisms/Skeletons/IntegrationCardSkeleton/IntegrationCardSkeleton";

export default function IntegrationsGridSkeleton() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 h-full gap-6 p-6">
      {[...Array(9)].map((_, i) => (
        <IntegrationCardSkeleton key={i} />
      ))}
    </div>
  );
}
