import { cookies } from "next/headers";
import { OrderCustomer } from "@/types/orderTypes";
import { customerEndpoints } from "./http/endpoints";

export const getCustomersServer = async (
  customerId: string
): Promise<OrderCustomer | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      console.warn("⚠️ No token found in cookies");
      return null;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${customerEndpoints.customers}/${customerId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("❌ Error fetching customer:", res.status);
      return null;
    }

    const json = await res.json();
    return json.data; // ✅ Aquí está la clave
  } catch (error) {
    console.error("❌ Error in getCustomer:", error);
    return null;
  }
};
