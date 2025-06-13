import {
  getNetIncome,
  getAverageSales,
  getCanceledOrders,
  getTotalOrders,
} from "@/services/analyticService";
import { SalesReportCard } from "@/components/organisms/SalesReportCard/SalesReportCard";
import { FinancialCard } from "@/components/organisms/FinancialCard/FinancialCard";
import { OverallSalesChart } from "@/components/organisms/OverallSalesChartCard/OverallSalesChartCard";
import { FC, useEffect, useState } from "react";
import { AnalyticDTO } from "@/types/analyticTypes";
import DashboardHomeSkeleton from "../Skeletons/DashboardHomeSkeleton";

export const DashboardHome: FC = () => {
  const [loading, setLoading] = useState(false);
  const [financing, setFinancing] = useState<Record<string, AnalyticDTO>>({
    netIncome: {
      total: 0,
      percentageChange: "0",
    },
    totalOrders: {
      total: 0,
      percentageChange: "0",
    },
    avgSales: {
      total: 0,
      percentageChange: "0",
    },
    canceledOrders: {
      total: 0,
      percentageChange: "0",
    },
  });

  const cardConfig = [
    {
      key: "netIncome",
      title: "New Net Income",
      currency: true,
      icon: undefined,
    },
    {
      key: "totalOrders",
      title: "Total Orders",
      currency: false,
      icon: "assets/cardIcon/cartIcon.svg",
    },
    {
      key: "avgSales",
      title: "Average Sales",
      currency: false,
      icon: "assets/cardIcon/salesIcon.svg",
    },
    {
      key: "canceledOrders",
      title: "Canceled Orders",
      currency: false,
      icon: "assets/cardIcon/salesIcon.svg",
    },
  ];
  const callServices = async () => {
    setLoading(true);
    const serviceCalls = [
      { key: "netIncome", fn: getNetIncome },
      { key: "totalOrders", fn: getTotalOrders },
      { key: "avgSales", fn: getAverageSales },
      { key: "canceledOrders", fn: getCanceledOrders },
    ];

    const results = await Promise.all(
      serviceCalls.map(async ({ key, fn }) => {
        const result = await fn({ from: "2025-06-08", to: "2025-06-12" });
        return [key, result];
      })
    );

    const financingData = Object.fromEntries(results);

    console.log(results);

    setFinancing(financingData);
    setLoading(false);
  };

  useEffect(() => {
    callServices();
  }, []);

  if (loading) {
    return <DashboardHomeSkeleton />;
  }

  return (
    <section className="p-6 bg-gray-100 w-full h-full">
      <div className="grid grid-cols-3 grid-rows-4 gap-6 w-full h-screen">
        {cardConfig.map(({ key, title, currency, icon }) => (
          <FinancialCard
            key={key}
            title={title}
            currency={currency}
            icon={icon}
            total={financing[key].total}
            lastWeek={financing[key].percentageChange}
          />
        ))}
        <div className="col-span-1 row-span-2 col-start-3 row-start-1 h-full">
          <SalesReportCard />
        </div>

        <OverallSalesChart />
      </div>
    </section>
  );
};
