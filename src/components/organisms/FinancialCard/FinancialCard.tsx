import Image from "next/image";
import { FC } from "react";

type financialCardProps = {
  currency: boolean;
  title: string;
  icon?: string;
  total: string;
  lastWeek: number;
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
          <Image
            src={currency ? "assets/cardIcon/moneyIcon.svg" : icon}
            alt={`descripcion de ${icon}`}
            className=" object-cover"
            width={44}
            height={35}
          />
          <span className="font-urbanist font-medium text-lg text-interface1">
            {title}
          </span>
        </div>
        <div className="flex w-full justify-center items-center space-x-6">
          <Image
            src="assets/cardIcon/customerIcon.svg"
            alt="customer icon"
            className=" object-cover"
            width={44}
            height={20}
          />
          <Image
            src="assets/cardIcon/optionsIcon.svg"
            alt="options icon"
            className=" object-cover ml-2"
            width={20}
            height={20}
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
            <Image
              src="assets/cardIcon/percentageIcon.svg"
              alt="percentage icon"
              className="  object-cover"
              width={20}
              height={20}
            />
            <span className="font-urbanist text-xs text-primary">
              +{lastWeek}%
              <span className="font-urbanist text-interface2 ml-1">
                from last week
              </span>
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            src="assets/cardIcon/barsIcon.svg"
            alt="bars icon"
            className=" object-cover"
            width={100}
            height={55}
          />
        </div>
      </div>
    </div>
  );
};
