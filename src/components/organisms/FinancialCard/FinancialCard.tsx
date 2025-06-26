/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

type financialCardProps = {
  currency: boolean;
  title: string;
  icon?: string;
  total: number;
  lastWeek: string;
};

export const FinancialCard: FC<financialCardProps> = ({
  currency,
  title,
  icon,
  total,
  lastWeek,
}) => {
  return (
    <div className="w-full h-full px-4 py-8 flex flex-col space-y-8 items-center justify-center rounded-lg bg-white shadow-sm">
      <div className="flex w-full space-x-4">
        <div className="flex w-full justify-start items-center ml-2 space-x-2">
          <img
            src={currency ? "/assets/cardIcon/moneyIcon.svg" : icon || ""}
            alt={`descripcion de ${icon}`}
            className=" object-cover w-11 h-9"
          />
          <span className="font-urbanist font-medium text-lg text-interface1">
            {title}
          </span>
        </div>
        <div className="flex w-full justify-center items-center space-x-6">
          <img
            src="/assets/cardIcon/customerIcon.svg"
            alt="customer icon"
            className=" object-cover ml-4 w-12 h-6"
          />
          <img
            src="/assets/cardIcon/optionsIcon.svg"
            alt="options icon"
            className=" object-cover ml-6 w-5 h-5"
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center space-x-4">
        <div className="flex flex-col items-start justify-center w-full space-y-2 ml-6">
          <span className="text-interface1 font-bold font-urbanist text-3xl">
            {currency ? "$" : ""}
            {total}
          </span>
          <div className="flex items-center justify-center">
            <img
              src="/assets/cardIcon/percentageIcon.svg"
              alt="percentage icon"
              className="  object-cover w-5 h-5"
            />
            <span className="font-urbanist text-xs text-primary">
              {lastWeek}%
              <span className="font-urbanist text-interface2 ml-1">
                from last week
              </span>
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <img
            src="/assets/cardIcon/barsIcon.svg"
            alt="bars icon"
            className=" object-cover w-[100px] h-[55px] ml-4"
          />
        </div>
      </div>
    </div>
  );
};
