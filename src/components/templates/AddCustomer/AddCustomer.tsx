"use client";

import { Button } from "@/components/atoms/Button/Button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { AddCustomerForm } from "@/components/organisms/AddCustomerForm/AddCustomerForm";
import { AddCustomerImage } from "@/components/organisms/AddCustomerForm/AddCustomerImage";
import { AddCustomerNote } from "@/components/organisms/AddCustomerForm/AddCustomerNote";
import { useRef } from "react";

export const AddCustomer = () => {
  const submitFn = useRef<() => void>(() => {});
  const router = useRouter();
  const resetImage = useRef<() => void>(() => {});
  const resetNote = useRef<() => void>(() => {});

  return (
    <section className="w-full h-full flex flex-col px-12 py-8 bg-gray-100 space-y-6">
      <div className="w-full justify-between flex items-center">
        <div
          onClick={() => router.push("/dashboard/orders")}
          className="bg-white rounded-sm px-6 py-3 space-x-2 flex justify-center items-center cursor-pointer"
        >
          <span className="text-interface1 text-base font-bold">
            All Orders
          </span>
          <MdKeyboardArrowLeft className="text-interface1" />
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Button variant="tertiary" className="px-6 py-3">
            Discard
          </Button>
          <Button
            variant="primary"
            className="px-8 py-3"
            onClick={() => submitFn.current()}
          >
            Save
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-10 grid-rows-10 gap-6 w-full h-full">
        <AddCustomerForm
          className="col-start-1 col-end-8 row-start-1 row-end-11"
          onSubmitRef={(fn) => (submitFn.current = fn)}
          onImageReset={() => resetImage.current()}
        />
        <AddCustomerImage
          className="col-start-8 col-end-11 row-start-1 row-end-8"
          onResetRef={(fn) => (resetImage.current = fn)}
        />
        <AddCustomerNote
          className="col-start-8 col-end-11 row-start-8 row-end-11"
          onResetRef={(fn) => (resetNote.current = fn)}
        />
      </div>
    </section>
  );
};
