"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartData = {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
  }[];
};

export const SalesReportCard = () => {
  const [data, setData] = useState<DoughnutChartData | null>(null);

  useEffect(() => {
    const personalWebsite = Math.floor(Math.random() * 60) + 20;
    const google = Math.floor(Math.random() * (100 - personalWebsite));
    const others = 100 - personalWebsite - google;

    setData({
      labels: ["Personal website", "Google", "Others"],
      datasets: [
        {
          data: [personalWebsite, google, others],
          backgroundColor: ["#00B88C", "#A9E23B", "#E5E7EB"],
          borderWidth: 0,
        },
      ],
    });
  }, []);

  if (!data) return null;

  return (
    <Card className="px-4 flex flex-col h-full py-8 space-y-4">
      <CardHeader className="flex flex-row justify-between items-center px-4">
        <CardTitle className="text-xl font-bold font-urbanist text-interface1">
          Sales report
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 text-sm text-interface2 font-urbanist">
              Month <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Month</DropdownMenuItem>
            <DropdownMenuItem>Week</DropdownMenuItem>
            <DropdownMenuItem>Year</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center space-y-4">
        <div className="h-40 w-40 relative items-center justify-center flex">
          <Doughnut
            data={data}
            options={{
              cutout: "60%",
              plugins: {
                legend: { display: false },
              },
            }}
          />
          <Image
            src="/assets/cardIcon/doughnut-shopping-cart.svg"
            alt="center icon"
            className="absolute"
            width={40}
            height={40}
          />
        </div>

        <div className="w-full space-y-1 text-sm font-urbanist mt-16">
          {data.labels.map((label, index) => (
            <div
              key={label}
              className="flex justify-between text-interface1 font-semibold"
            >
              <span className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></span>
                {label}
              </span>
              <span>{data.datasets[0].data[index]}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
