import { FinancialCardSkeleton } from "@/components/organisms/Skeletons/FinancialCardSkeleton/FInancialCardSkeleton";
import { SalesReportCardSkeleton } from "@/components/organisms/Skeletons/SalesReportSkeleton/SaleReportSkeleton";
import { OverallSalesChartSkeleton } from "@/components/organisms/Skeletons/OverallSalesSkeleton/OverallSalesSkeleton";

export default function DashboardHomeSkeleton() {
  return (
    <section className=" w-full h-full">
      <div className="grid grid-cols-3 grid-rows-4 gap-4 h-full p-6">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 col-span-2 row-span-2">
          {[...Array(4)].map((_, i) => (
            <FinancialCardSkeleton key={i} />
          ))}
        </div>

        <div className="col-start-3 row-start-1 row-span-2">
          <SalesReportCardSkeleton />
        </div>

        <div className="col-span-3 row-span-2 row-start-3 col-start-1">
          <OverallSalesChartSkeleton />
        </div>
      </div>
    </section>
  );
}
