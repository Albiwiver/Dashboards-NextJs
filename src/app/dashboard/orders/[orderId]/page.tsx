import { notFound } from "next/navigation";
import { OrderDetailTemplate } from "@/components/templates/OrderDetailTemplate/OrderDetailTemplate";
import { getOrderDetail } from "@/services/orderDetailService";
import { getCustomersServer } from "@/services/customerService.server";

export default async function OrderDetailPage({
  params,
}: {
  params: { orderId: string };
}) {
  const order = await getOrderDetail(params.orderId);
  if (!order) return notFound();
  const customerId = order?.customer._id;
  if (!customerId) return notFound();
  const customer = await getCustomersServer(customerId);

  return <OrderDetailTemplate order={order} customer={customer} />;
}
