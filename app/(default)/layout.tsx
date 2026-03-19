'use client';

import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="grow">{children}</main>
      <MainFooter />
    </div>
  );
}
