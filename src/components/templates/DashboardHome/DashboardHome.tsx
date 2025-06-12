import { getNetIncome } from "@/services/analyticService";
import { SalesReportCard } from "@/components/organisms/SalesReportCard/SalesReportCard";
import { FinancialCard } from "@/components/organisms/FinancialCard/FinancialCard";
import { OverallSalesChart } from "@/components/organisms/OverallSalesChartCard/OverallSalesChartCard";
import { useEffect } from "react";

export const DashboardHome = () => {
  useEffect(() => {
    getNetIncome({ from: "2025-05-30", to: "2025-06-01" });
  }, []);

  return (
    <section className="p-6 bg-gray-100 w-full h-full">
      <div className="grid grid-cols-3 grid-rows-4 gap-6 w-full h-screen">
        <FinancialCard
          currency={true}
          title={"New Net Income"}
          total={"8245"}
          lastWeek={0.5}
        />
        <FinancialCard
          currency={false}
          icon={"assets/cardIcon/cartIcon.svg"}
          title={"Total order"}
          total={"1256"}
          lastWeek={1.0}
        />
        <FinancialCard
          currency={true}
          title={"Average Sales"}
          total={"8245"}
          lastWeek={0.5}
        />
        <FinancialCard
          currency={false}
          icon={"assets/cardIcon/salesIcon.svg"}
          title={"Impressions"}
          total={"1256"}
          lastWeek={1.0}
        />
        <div className="col-span-1 row-span-2 col-start-3 row-start-1 h-full">
          <SalesReportCard />
        </div>

        <OverallSalesChart />
      </div>
    </section>
  );
};
