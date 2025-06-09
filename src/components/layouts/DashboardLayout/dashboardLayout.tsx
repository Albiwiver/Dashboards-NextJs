export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-red-300">
      <div className="flex flex-col flex-1">
        <main className="">{children}</main>
      </div>
    </div>
  );
}
