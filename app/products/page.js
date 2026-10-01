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
    <section>
      <div className="products-heading">
        <p className="hero-tag">OUR COLLECTION</p>
        <h1>Explore Products</h1>
        <p>Discover our collection and find something perfect for you.</p>
      </div>

      <div className="products-grid">
        {data.products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <div className="product-info">
              <p className="product-category">{product.category}</p>

              <h2>{product.title}</h2>

              <p className="product-description">
                {product.description.length > 80
                  ? product.description.slice(0, 80) + "..."
                  : product.description}
              </p>

              <div className="product-bottom">
                <span className="price">${product.price}</span>

                <Link
                  href={`/products/${product.id}`}
                  className="view-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}