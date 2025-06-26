import { FC } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

type Props = {
  customerEmail: string;
  CustomerPhone: string;
};

export const CustomerContactInformationDetail: FC<Props> = ({
  customerEmail,
  CustomerPhone,
}) => {
  return (
    <div className="flex flex-col w-full border-b-1 border-b-gray-100 space-y-4 items-start justify-center pb-4">
      <div className="flex w-full justify-between items-center">
        <h4 className="text-interface1 font-bold text-base">
          Contact Information
        </h4>
        <span className="text-primary text-sm font-medium">Edit</span>
      </div>

      <div className="flex space-x-4">
        <MdOutlineMailOutline className="h-6 w-6 text-primary" />
        <span className="text-interface2 text-base font-medium">
          {customerEmail}
        </span>
      </div>

      <div className="flex space-x-4">
        <FiPhone className="h-5 w-5 text-primary" />
        <span className="text-interface2 text-base font-medium">
          {CustomerPhone}
        </span>
      </div>
    </div>
  );
};
