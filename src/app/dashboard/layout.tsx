import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "../globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
