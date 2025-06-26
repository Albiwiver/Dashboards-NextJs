import { OrderDetail } from "@/types/orderTypes";
import { cookies } from "next/headers";

export const getOrderDetail = async (
  orderId: string
): Promise<OrderDetail | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      console.warn("⚠️ No se encontró el token en las cookies");
      return null;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("❌ Error en la respuesta:", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("❌ Error fetching order details:", error);
    return null;
  }
};
