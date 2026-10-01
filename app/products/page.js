import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Products Store - Products List",
  description: "Browse all products in Products Store",
};

export default async function Products() {
  const cookieStore = await cookies();

  if (cookieStore.get("loggedIn")?.value !== "true") {
    redirect("/login");
  }

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