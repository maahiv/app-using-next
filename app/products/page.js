import Link from "next/link";

export default async function Products() {
  const response = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });

  const data = await response.json();

  return (
    <div>
      <h1>Products Page</h1>

      {data.products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            {product.title}
          </Link>
        </div>
      ))}
    </div>
  );
}