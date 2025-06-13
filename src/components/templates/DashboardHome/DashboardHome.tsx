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
      currency: true,
      icon: undefined,
    },
  ];

  useEffect(() => {
    callServices();
  }, []);

  const callServices = async () => {
    const serviceCalls = [
      { key: "netIncome", fn: getNetIncome },
      { key: "totalOrders", fn: getNetIncome },
      { key: "avgSales", fn: getNetIncome },
      { key: "canceledOrders", fn: getNetIncome },
    ];

    const results = await Promise.all(
      serviceCalls.map(async ({ key, fn }) => {
        const result = await fn();
        return [key, result];
      })
    );

    const financingData = Object.fromEntries(results);

    console.log(results);

    setFinancing(financingData);
  };

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
