import Link from "next/link";
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
    <section className="product-detail">
      <Link href="/products" className="back-link">
        ← Back to Products
      </Link>

      <div className="detail-card">
        <div className="detail-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="detail-content">
          <p className="product-category">{product.category}</p>

          <h1>{product.title}</h1>

          <div className="rating">
            ⭐ {product.rating} / 5
          </div>

          <p className="detail-description">
            {product.description}
          </p>

          <div className="detail-price">${product.price}</div>

          <div className="stock">
            {product.stock > 0
              ? `✓ In Stock (${product.stock} available)`
              : "Out of Stock"}
          </div>

          <Link href="/products" className="shop-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}