/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { MdOutlineMailOutline } from "react-icons/md";

type Props = {
  customerImage?: string;
  customerName: string;
  orderQuantity: number;
};

export const CustomerNameImageDetail: FC<Props> = ({
  customerImage,
  customerName,
  orderQuantity,
}) => {
  return (
    <div className="border-b-gray-100 border-b-1 flex w-full justify-between items-center">
      <div className="flex w-full py-4 space-x-3 items-center justify-start">
        <img
          src={customerImage}
          alt="customer image"
          className="h-12 w-12 rounded-full"
        />
        <div className="flex flex-col items-start justify-center space-y-2">
          <span className="text-interface1 font-semibold">{customerName}</span>
          <span className="text-interface2">{orderQuantity} orders</span>
        </div>
      </div>
      <div className="">
        <MdOutlineMailOutline className="text-primary h-6 w-6" />
      </div>
    </div>
  );
};
