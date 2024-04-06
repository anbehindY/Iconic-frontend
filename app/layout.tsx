import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "../components/shared/NavigationBar";
import Footer from "../components/shared/Footer";
import QueryWrapper from "@/components/providers/QueryWrapper";
import ToastWrapper from "@/components/providers/ToastWrapper";
import StoreProvider from "@/components/providers/StoreProvider";
import useGetCollections from "@/hooks/queryHooks/useGetCollections";
import MainLayout from "@/components/shared/MainLayout";

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
  return (
    <html lang="en" data-theme="cupcake">
      <QueryWrapper>
        <StoreProvider>
          <body className={`${poppins.variable} antialiased`}>
            <MainLayout>
              <ToastWrapper>{children}</ToastWrapper>
            </MainLayout>
          </body>
        </StoreProvider>
      </QueryWrapper>
    </html>
  );
}
