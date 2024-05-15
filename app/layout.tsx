import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryWrapper from "@/components/providers/QueryWrapper";
import ToastWrapper from "@/components/providers/ToastWrapper";
import StoreProvider from "@/components/providers/StoreProvider";
import MainLayout from "@/components/shared/MainLayout";
import { headers } from "next/headers";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iconic",
  description: "E-commerce website for Iconic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthPage = headers().get("referer")?.includes("auth");

  return (
    <html lang="en" data-theme="cupcake">
      <QueryWrapper>
        <StoreProvider>
          <body className={`${poppins.variable} antialiased`}>
            <ToastWrapper>
              <MainLayout>{children}</MainLayout>
            </ToastWrapper>
          </body>
        </StoreProvider>
      </QueryWrapper>
    </html>
  );
}
