export default function ProductDetail({params}: {params: {productName: string}}) {
    return (
        <section className="h-screen p-20 bg-yellow-500">
        <h1 className="text-3xl font-bold">Product detail {params.productName}</h1>
      </section>
    )
}