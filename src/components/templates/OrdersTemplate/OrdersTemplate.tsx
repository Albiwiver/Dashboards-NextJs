"use client";

import { useEffect, useMemo, useState } from "react";
import { getOrders } from "@/services/orderService";
import { getCustomers } from "@/services/customerService";
import { OrderRow } from "@/components/organisms/OrderComponent/OrderComponent";
import { Order, Customer } from "@/types/orderTypes";
import { OrdersBar } from "@/components/organisms/OrdersBar/OrdersBar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiSort } from "react-icons/bi";
import { OrdersBoardSkeleton } from "../Skeletons/OrderBoardSkeleton";
import { CsvModal } from "@/components/organisms/CsvModal/CsvModal";

export const OrdersTemplate = () => {
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<
    "ALL" | "COMPLETED" | "CANCELED"
  >("ALL");
  const [sortKey, setSortKey] = useState<
    "transactionId" | "createdAt" | "total"
  >("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersRes, customersRes] = await Promise.all([
          getOrders(),
          getCustomers(),
        ]);
        setOrders(ordersRes.data);
        setCustomers(customersRes.data);
      } catch (error) {
        console.error("Error cargando órdenes o clientes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const customerMap = useMemo(() => {
    const map: Record<string, Customer> = {};
    customers.forEach((c) => {
      map[c._id] = c;
    });
    return map;
  }, [customers]);

  const filteredOrders = useMemo(() => {
    if (statusFilter === "ALL") return orders;
    return orders.filter((order) => order.status === statusFilter);
  }, [orders, statusFilter]);

  const sortedOrders = useMemo(() => {
    const sorted = [...filteredOrders].sort((a, b) => {
      let aValue = a[sortKey];
      let bValue = b[sortKey];

      if (sortKey === "createdAt") {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }

      if (sortKey === "total") {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredOrders, sortKey, sortOrder]);

  const handleSort = (key: typeof sortKey) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  if (loading) return <OrdersBoardSkeleton />;

  return (
    <section className="bg-gray-100 w-full h-full flex flex-col space-y-6 px-12 py-8">
      <Tabs
        defaultValue="ALL"
        onValueChange={(val) => {
          if (val === "ALL" || val === "COMPLETED" || val === "CANCELED") {
            setStatusFilter(val);
          }
        }}
        className="w-full flex justify-start"
      >
        <TabsList className="flex space-x-10 w-full h-16 justify-start text-start">
          {["ALL", "COMPLETED", "CANCELED"].map((status) => (
            <TabsTrigger
              key={status}
              value={status}
              className="data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none focus-visible:outline-none focus-visible:ring-0 text-interface2 cursor-pointer h-full"
            >
              {status === "ALL"
                ? "All Orders"
                : status.charAt(0) + status.slice(1).toLowerCase()}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <OrdersBar uploadCsv={() => setShowModal(true)} />

      <div className="grid grid-cols-7 gap-4 px-4 py-2 text-lg text-interface1 bg-white font-semibold font-urbanist border-b w-full">
        <div className="text-start">Status</div>
        <div
          onClick={() => handleSort("transactionId")}
          className="flex items-center cursor-pointer"
        >
          Transaction ID <BiSort className="ml-1 h-4 w-4" />
        </div>
        <div
          onClick={() => handleSort("createdAt")}
          className="flex items-center justify-center cursor-pointer"
        >
          Date <BiSort className="ml-1 h-4 w-4" />
        </div>
        <div className="text-center">From</div>
        <div className="text-center">To</div>
        <div
          onClick={() => handleSort("total")}
          className="flex items-center justify-center cursor-pointer"
        >
          Amount <BiSort className="ml-1 h-4 w-4" />
        </div>
        <div className="text-center">Status</div>
      </div>

      {sortedOrders.map((order) => (
        <OrderRow
          key={order._id}
          order={order}
          customer={customerMap[order.customer]}
        />
      ))}
      <CsvModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};
