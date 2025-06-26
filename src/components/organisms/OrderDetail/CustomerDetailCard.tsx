import { FC } from "react";
import { CustomerNameImageDetail } from "@/components/molecules/OrderDetail/CustomerDetail/CustomerNameImageDetail";
import { CustomerContactInformationDetail } from "@/components/molecules/OrderDetail/CustomerDetail/CustomerContactInformationDetail";
import { CustomerShippingAddressDetail } from "@/components/molecules/OrderDetail/CustomerDetail/CustomerShippingAddressDetail";
import { CustomerBillingAddressDetail } from "@/components/molecules/OrderDetail/CustomerDetail/CustomerBillingAddressDetail";

type CustomerDetailCardProps = {
  customerImage?: string;
  customerName: string;
  orderQuantity: number;
  customerEmail: string;
  customerPhone: string;
  customerStreet: string;
  customerCity: string;
  customerState: string;
  customerPostalCode: string;
  className?: string;
};

export const CustomerDetailCard: FC<CustomerDetailCardProps> = ({
  customerImage,
  customerName,
  orderQuantity,
  customerEmail,
  customerPhone,
  customerStreet,
  customerCity,
  customerState,
  customerPostalCode,
  className,
}) => {
  return (
    <div
      className={`w-full h-full p-6 flex flex-col space-y-4 font-urbanist bg-white rounded-md shadow-md ${className}`}
    >
      <h3 className="font-urbanist text-xl font-bold text-start ">Customer</h3>
      <CustomerNameImageDetail
        customerImage={customerImage}
        customerName={customerName}
        orderQuantity={orderQuantity}
      />
      <CustomerContactInformationDetail
        customerEmail={customerEmail}
        CustomerPhone={customerPhone}
      />
      <CustomerShippingAddressDetail
        street={customerStreet}
        city={customerCity}
        state={customerState}
        postalCode={customerPostalCode}
      />
      <CustomerBillingAddressDetail />
    </div>
  );
};
