"use client";

import { FC } from "react";
import { OrderDetail } from "@/types/orderTypes";
import { OrderCustomer } from "@/types/orderTypes";
import { FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";
import { ItemDetailCard } from "@/components/organisms/OrderDetail/ItemDetailCard";
import { PriceItemDetailCard } from "@/components/organisms/OrderDetail/PriceItemDetailCard";
import { CustomerDetailCard } from "@/components/organisms/OrderDetail/CustomerDetailCard";
import { NoteDetailCard } from "@/components/organisms/OrderDetail/NoteDetailCard";

type Props = {
  order: OrderDetail;
  customer: OrderCustomer | null;
};

export const OrderDetailTemplate: FC<Props> = ({ order, customer }) => {
  return (
    <section className="flex flex-col p-12 h-full w-full items-start space-y-6 bg-gray-100">
      <Link
        href="/dashboard/orders"
        className="inline-flex items-center gap-2 px-4 py-3 rounded bg-white text-interface2 hover:text-primary font-urbanist font-semibold transition-colors"
      >
        <FaChevronLeft />
        <span>Orders</span>
      </Link>

      <div className="h-full w-full grid grid-cols-6 grid-rows-9 gap-6">
        {order.items.map((item) => {
          return (
            <ItemDetailCard
              key={item.product._id}
              className="col-start-1 col-end-5 row-start-1 row-end-5"
              productId={item.product._id}
              productImage={item.product.imageUrl}
              productName={item.product.name}
              productPrice={item.product.price}
              productQuantity={item.quantity}
            />
          );
        })}
        <PriceItemDetailCard
          className="col-start-1 col-end-5 row-start-5 row-end-10"
          subtotal={order.subtotal}
          shippingCost={order.shippingCost}
          tax={order.tax}
          total={order.total}
          itemQuantity={order.items.length}
        />
        <CustomerDetailCard
          className="col-start-5 col-end-7 row-start-1 row-end-8"
          customerImage={customer?.avatar}
          customerCity={order.shippingAddress.city}
          customerEmail={order.customer.email}
          customerName={order.customer.name}
          customerPhone={order.customer.phone}
          customerPostalCode={order.shippingAddress.postalCode}
          customerState={order.shippingAddress.state}
          customerStreet={order.shippingAddress.street}
          orderQuantity={order.items.length}
        />
        <NoteDetailCard
          customerNote={order.note}
          className="col-start-5 col-end-7 row-start-8 row-end-10"
        />
      </div>
    </section>
  );
};
