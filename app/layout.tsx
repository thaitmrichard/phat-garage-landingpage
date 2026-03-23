import "./css/style.css";

import { Inter, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Phát Garage - Chăm Sóc Xe Chuyên Nghiệp",
  description: "Dịch vụ bảo dưỡng, sửa chữa ô tô uy tín tại Phát Garage.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable, inter.variable)} suppressHydrationWarning>
      <body
        className="bg-black text-white font-inter tracking-tight antialiased"
        suppressHydrationWarning
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
