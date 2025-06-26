/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/atoms/Button/Button";
import { SearchInput } from "@/components/molecules/SearchInput/SearchInput";
import React, { FC } from "react";

type OrdersBarProps = {
  uploadCsv: () => void;
};

export const OrdersBar: FC<OrdersBarProps> = ({ uploadCsv }) => {
  return (
    <div className="w-full flex h-14 gap-2">
      <div className="w-3/5 flex justify-start">
        <SearchInput
          className=" rounded bg-white w-full"
          placeholder="Search by ID, product, or others..."
        />
      </div>
      <div className="flex justify-evenly w-2/5 gap-2">
        <Button variant="primary" className="py-3" onClick={uploadCsv}>
          Import CSV
        </Button>
        <div className="bg-white rounded text-interface2 flex items-center justify-center h-full px-4 py-2">
          <img
            src="/assets/icons/calendar-icon.svg"
            alt="calendar icon"
            className="mr-2"
          />
          April 11 - April 24
        </div>
        <Button className="" variant="primary">
          Add Order
        </Button>
      </div>
    </div>
  );
};
