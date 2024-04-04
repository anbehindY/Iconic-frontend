"use client";

import useGetAllCollections from "@/hooks/queryHooks/useGetAllCollections";
import NavigationBar from "@/components/shared/NavigationBar";
import Footer from "@/components/shared/Footer";
import LoadingPage from "@/app/loading";
import ErrorPage from "@/app/error";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GetAllCollectionsQuery = useGetAllCollections();

  if (GetAllCollectionsQuery.isPending) return <LoadingPage />;

  if (GetAllCollectionsQuery.isError) return <ErrorPage />;

  return (
    <main>
      <NavigationBar collections={GetAllCollectionsQuery.data.payload} />
      {children}
      <Footer />
    </main>
  );
}
