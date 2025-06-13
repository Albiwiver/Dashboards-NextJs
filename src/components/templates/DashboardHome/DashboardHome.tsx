import { getNetIncome } from "@/services/analyticService";
import { SalesReportCard } from "@/components/organisms/SalesReportCard/SalesReportCard";
import { FinancialCard } from "@/components/organisms/FinancialCard/FinancialCard";
import { OverallSalesChart } from "@/components/organisms/OverallSalesChartCard/OverallSalesChartCard";
import { useEffect, useState } from "react";

type AnalyticDTO = {
  total: number;
  percentageChange: string;
};

export const DashboardHome = () => {
  const [netIncome, setNetIncome] = useState<AnalyticDTO>();
  const getIncomeNet = async () => {
    const netIncomeGot = await getNetIncome();
    setNetIncome(netIncomeGot);
  };
  useEffect(() => {
    getIncomeNet();
  }, []);

  return (
    <section className="p-6 bg-gray-100 w-full h-full">
      <div className="grid grid-cols-3 grid-rows-4 gap-6 w-full h-screen">
        <FinancialCard
          currency={true}
          title={"New Net Income"}
          total={netIncome?.total || 0}
          lastWeek={netIncome?.percentageChange || "0"}
        />
        <FinancialCard
          currency={false}
          icon={"assets/cardIcon/cartIcon.svg"}
          title={"Total order"}
          total={"1256"}
          lastWeek={1.0}
        />
        <FinancialCard
          currency={false}
          icon="assets/cardIcon/salesIcon.svg"
          title={"Average Sales"}
          total={"8245"}
          lastWeek={0.5}
        />
        <FinancialCard
          currency={true}
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
