"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type ChartDataset = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderRadius: number;
};

export const OverallSalesChart = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: ChartDataset[];
  } | null>(null);

  useEffect(() => {
    const randomData = () =>
      Array.from(
        { length: 5 },
        () => Math.floor(Math.random() * 10000) + 10000
      );

    const newData = {
      labels: ["Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29"],
      datasets: [
        {
          label: "Website",
          data: randomData(),
          backgroundColor: "#00B88C",
          borderRadius: 6,
        },
        {
          label: "Google",
          data: randomData(),
          backgroundColor: "#A9E23B",
          borderRadius: 6,
        },
        {
          label: "Others",
          data: randomData(),
          backgroundColor: "#E5E7EB",
          borderRadius: 6,
        },
      ],
    };

    setChartData(newData);
  }, []);

  if (!chartData) return null;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: { display: false },
        ticks: {
          stepSize: 10000,
          callback: function (value: string | number) {
            const numericValue =
              typeof value === "string" ? parseInt(value) : value;
            return numericValue >= 1000
              ? numericValue / 1000 + "K"
              : numericValue;
          },
        },
      },
    },
  };

  const total = chartData.datasets
    .flatMap((d) => d.data)
    .reduce((acc, val) => acc + val, 0)
    .toLocaleString();

  const weeklyIncrease = (Math.random() * 30).toFixed(1); // puedes moverlo a otro useState también si quieres control total

  return (
    <Card className="col-span-3 row-span-2 flex flex-col justify-between p-6 bg-white shadow rounded-lg">
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <p className="text-xs text-interface2 font-urbanist">Overall sales</p>
          <CardTitle className="text-2xl font-bold text-interface1 font-urbanist">
            ${total}
          </CardTitle>
          <p className="text-xs font-semibold text-primary mt-1">
            +{weeklyIncrease}% from last week
          </p>
        </div>
        <button className="flex items-center gap-1 text-sm text-interface2 font-urbanist mr-10 border px-2 py-1 rounded-lg">
          Apr 25 - Apr 29
          <CalendarDays className="w-4 h-4 ml-1" />
        </button>
      </CardHeader>

      <CardContent className="flex-1 flex items-center justify-center h-[300px]">
        <Bar data={chartData} options={options} className="w-full h-full" />
      </CardContent>
    </Card>
  );
};
