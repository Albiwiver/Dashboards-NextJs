/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

type PriceItemCardProps = {
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  itemQuantity: number;
  className?: string;
};

export const PriceItemDetailCard: FC<PriceItemCardProps> = ({
  subtotal,
  shippingCost,
  tax,
  total,
  itemQuantity,
  className,
}) => {
  return (
    <div
      className={`w-full h-full flex flex-col p-6 font-urbanist rounded-md bg-white shadow-md ${className}`}
    >
      <div className="flex w-full pb-4 items-start justify-start border-b-1 border-b-gray-100">
        <div className="flex space-x-4 justify-center items-center">
          <img
            src="/assets/icons/dollar-Icon.svg"
            alt="dollar icon"
            className="w-8 h-8"
          />
          <span className="text-primary text-lg">Paid</span>
        </div>
      </div>

      <div className="flex w-full py-6 flex-col space-y-10 font-urbanist border-b-1 border-b-gray-100">
        <div className="flex w-full space-x-4 items-center">
          <span className="text-interface1 text-base font-bold">Subtotal</span>
          <div className="w-full flex justify-between items-center text-interface2 text-base font-medium ml-1">
            <span>{itemQuantity} Item</span>
            <span>${subtotal}</span>
          </div>
        </div>

        <div className="flex w-full space-x-4 items-center">
          <span className="text-interface1 text-base font-bold">Shipping</span>
          <div className="w-full flex justify-between items-center text-interface2 text-base font-medium">
            <span>AU Standard Delivery</span>
            <span>${shippingCost}</span>
          </div>
        </div>

        <div className="flex w-full space-x-4 items-center">
          <span className="text-interface1 text-base font-bold">Tax</span>
          <div className="w-full flex justify-between items-center text-interface2 text-base font-medium ml-9">
            <span>GST (AU) 10% Item</span>
            <span>${tax}</span>
          </div>
        </div>
      </div>
      <div className="text-base flex justify-between items-center h-full w-full mt-4">
        <span className="text-interface2 text-base font-medium">
          Paid by customer
        </span>

        <span className="text-xl font-bold">${total}</span>
      </div>
    </div>
  );
};
