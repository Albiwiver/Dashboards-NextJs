import { FC } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const CustomerBillingAddressDetail: FC = () => {
  return (
    <div className="flex flex-col w-full  space-y-4 items-start justify-center">
      <div className="flex w-full justify-between items-center">
        <h4 className="text-interface1 font-bold text-base">Billing Address</h4>
        <span className="text-primary text-sm font-medium">Edit</span>
      </div>

      <div className="flex space-x-2">
        <HiOutlineLocationMarker className="h-6 w-6 text-primary" />
        <span className="text-interface2 text-base font-medium">
          Same as shipping address
        </span>
      </div>
    </div>
  );
};
