import { FinancialCard } from "@/components/organisms/FinancialCard/FinancialCard";

export const DashboardHome = () => {
  return (
    <section className="p-6 bg-gray-100 w-full h-full">
      <div className="grid grid-cols-3 grid-rows-4 gap-6 w-full">
        <FinancialCard />
        <FinancialCard />
        <FinancialCard />
        <FinancialCard />
      </div>
    </section>
  );
};
