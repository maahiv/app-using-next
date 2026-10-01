import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  const product = await response.json();

  return {
    title: `${product.title} - Products Store`,
    description: product.description,
  };
}

export default async function Product({ params }) {
  const cookieStore = await cookies();

  if (cookieStore.get("loggedIn")?.value !== "true") {
    redirect("/login");
  }

  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  const product = await response.json();

  return (
    <div>
      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <Image
        src="/product.jpg"
        alt={product.title}
        width={300}
        height={300}
      />
    </div>
  );
}