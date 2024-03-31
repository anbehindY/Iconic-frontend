import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "../components/shared/NavigationBar";
import Footer from "../components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iconic",
  description: "E-commerce website for Iconic",
};

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NavigationBar />
      {children}
      <Footer />
    </main>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={`${inter.className} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
