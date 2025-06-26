import { FC } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

type Props = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
};

export const CustomerShippingAddressDetail: FC<Props> = ({
  street,
  city,
  state,
  postalCode,
}) => {
  return (
    <div className="flex flex-col w-full border-b-1 border-b-gray-100 space-y-4 items-start justify-center pb-4">
      <div className="flex w-full justify-between items-center">
        <h4 className="text-interface1 font-bold text-base">
          Shipping Address
        </h4>
        <span className="text-primary text-sm font-medium">Edit</span>
      </div>

      <div className="flex space-x-2">
        <HiOutlineLocationMarker className="h-6 w-6 text-primary" />
        <span className="text-interface2 text-base font-medium w-[80%]">
          {street} {city} {state} {postalCode}
        </span>
      </div>
    </div>
  );
};
