import Image from "next/image";

export const FinancialCard = () => {
  return (
    <div className="w-full h-full px-4 py-8 flex flex-col space-y-8 items-center justify-center rounded-lg bg-white">
      <div className="flex w-full space-x-4">
        <div className="flex w-full justify-center items-center space-x-2">
          <Image
            src="assets/cardIcon/moneyIcon.svg"
            alt="money icon"
            className=" object-cover"
            width={44}
            height={35}
          />
          <span className="font-urbanist text-base text-interface1">
            New Net Income
          </span>
        </div>
        <div className="flex w-full justify-center items-center space-x-4">
          <Image
            src="assets/cardIcon/customerIcon.svg"
            alt="money icon"
            className=" object-cover"
            width={44}
            height={20}
          />
          <Image
            src="assets/cardIcon/optionsIcon.svg"
            alt="money icon"
            className=" object-cover"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center space-x-4">
        <div className="flex flex-col items-center justify-center w-full space-y-2">
          <span className="text-interface1 font-bold font-urbanist text-3xl">
            $8,245.00
          </span>
          <div className="flex items-center justify-center">
            <Image
              src="assets/cardIcon/percentageIcon.svg"
              alt="money icon"
              className="  object-cover"
              width={20}
              height={20}
            />
            <span className="font-urbanist text-xs text-primary">
              +0.5%
              <span className="font-urbanist text-interface2">
                from last week
              </span>
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            src="assets/cardIcon/barsIcon.svg"
            alt="money icon"
            className=" object-cover"
            width={100}
            height={55}
          />
        </div>
      </div>
    </div>
  );
};
