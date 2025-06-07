import { ReactNode } from "react";

export default function CenteredAuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative w-full h-screen flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
        {children}
      </div>
    </main>
  );
}
