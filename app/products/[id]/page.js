import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Product({ params }) {
  const cookieStore = await cookies();

  if (cookieStore.get("loggedIn")?.value !== "true") {
    redirect("/login");
  }

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