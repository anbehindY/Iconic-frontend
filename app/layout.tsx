import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import Promotion from "./components/Banner";
import NavigationBar from "./components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

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
    <PrimeReactProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <Promotion /> */}
          <NavigationBar />
          {children}
        </body>
      </html>
    </PrimeReactProvider>
  );
}
