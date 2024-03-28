export default function CollectionDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section className="h-screen p-20 bg-yellow-500  ">
      <h1 className="text-3xl font-bold">Collection Item {params.id}</h1>
    </section>
  );
}
