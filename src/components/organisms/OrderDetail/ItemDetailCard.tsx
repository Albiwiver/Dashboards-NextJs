/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/atoms/Button/Button";
import { FC } from "react";

type ItemDetailCardProps = {
  productId: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
  productImage: string;
  className?: string;
};

export const ItemDetailCard: FC<ItemDetailCardProps> = ({
  productId,
  productName,
  productPrice,
  productQuantity,
  productImage,
  className,
}) => {
  return (
    <div
      className={`h-full w-full flex flex-col p-6 bg-white rounded-md shadow-md ${className}`}
    >
      <div className="flex w-full items-center justify-start border-b-1 border-b-gray-100 py-2">
        <div className="flex space-x-2 items-center justify-center text-primary font-urbanist text-base">
          <img
            src="/assets/icons/unfullfilled-icon.svg"
            alt="unfullfilled icon"
          />
          <span>Unfullfilled</span>
        </div>
      </div>

      <div className="flex w-full items-center justify-center border-b-1 border-b-gray-100 py-6">
        <div className="flex w-full p-4 bg-gray-100 rounded-md space-x-4">
          <div className="flex items-center justify-center rounded-md w-14 h-14">
            <img
              className="object-cover rounded-md w-full h-full"
              src={productImage}
              alt={`Image of ${productImage}`}
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <div className="flex justify-between items-center text-base w-full text-interface1 font-urbanist font-bold">
              <span>{productName}</span>
              <span>${productPrice}</span>
            </div>
            <div className="flex justify-between items-center w-full text-sm text-interface2 font-urbanist font-medium">
              <span>ID: {productId}</span>
              <span>{productQuantity}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-end pt-4 h-full">
        <div className="flex space-x-2 items-center justify-center">
          <Button variant="tertiary" className="text-sm">
            Mark as fulfilled
          </Button>
          <Button variant="primary" className="text-sm">
            Crate shipping label
          </Button>
        </div>
      </div>
    </div>
  );
};
