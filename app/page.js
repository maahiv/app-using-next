import Link from "next/link";

export const metadata = {
  title: "Products Store - Home",
  description: "Welcome to Products Store",
};

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">WELCOME TO PRODUCTS STORE</p>

        <h1>
          Find Products
          <br />
          You’ll Love.
        </h1>

        <p className="hero-description">
          Explore our collection of quality products, discover something new,
          and find exactly what you're looking for.
        </p>

        <Link href="/products" className="shop-btn">
          Explore Products →
        </Link>
      </div>

      <div className="hero-card">
        <div className="hero-icon">🛍️</div>
        <h2>Discover More</h2>
        <p>Browse our latest products and find your favorites.</p>
      </div>
    </section>
  );
}