import Image from "next/image";

export default async function Product({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Product {id} details page — content coming soon!</h1>

      <Image
        src="/product.jpg"
        alt="Product"
        width={300}
        height={300}
      />
    </div>
  );
}