import { Inter } from "next/font/google";
import {inter,lusitana} from "@/app/ui/font"

import "@/app/ui/global.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>{children}</body>
    </html>
  );
}
