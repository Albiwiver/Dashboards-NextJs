/* eslint-disable @next/next/no-img-element */
import { OrderProps, Order } from "@/types/orderTypes";
import Link from "next/link";

const statusIcons: Record<Order["status"], string> = {
  COMPLETED: "/assets/orderIcons/completed-icon.svg",
  CANCELED: "/assets/orderIcons/notCompleted-icon.svg",
};

export const OrderRow = ({ order, customer }: OrderProps) => {
  const formattedDate = new Date(order.createdAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTotal = `$${order.total.toFixed(2)}`;

  const badgeClasses =
    order.status === "COMPLETED" ? "text-primary" : "text-red-700";

  return (
    <Link href={`/dashboard/orders/${order._id}`} className="block">
      <div className="grid grid-cols-7 bg-white items-center border-b px-4 py-3 text-sm hover:bg-muted/50 rounded transition cursor-pointer">
        <div>
          <img
            src={statusIcons[order.status]}
            alt={order.status}
            className="h-12 w-12"
          />
        </div>

        <div className="font-medium text-center font-urbanist text-base">
          {order.transactionId}
        </div>

        <div className="text-center font-urbanist text-base">
          {formattedDate}
        </div>

        <div className="text-center font-urbanist text-base">
          {order.shippingAddress.city}
        </div>

        <div className="flex items-center gap-2">
          {customer?.avatar && (
            <img
              src={customer.avatar}
              alt={customer.name}
              className="h-8 w-8 object-cover rounded-full"
            />
          )}
          <span className="font-urbanist text-base">
            {customer?.name ?? "Desconocido"}
          </span>
        </div>

        <div className="text-center font-urbanist text-base">
          {formattedTotal}
        </div>

        <div className="flex justify-center">
          <span
            className={`text-base font-semibold rounded px-2 py-1 font-urbanist text-end ${badgeClasses}`}
          >
            {order.status}
          </span>
        </div>
      </div>
    </Link>
  );
};
