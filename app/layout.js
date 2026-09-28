import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Image
            src="/logo.png"
            alt="Products Store Logo"
            width={100}
            height={100}
          />

          <h1>Products Store</h1>

          <nav>
            <Link href="/">Home</Link>{" "}
            <Link href="/products">Products</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2026 Products Store</p>
        </footer>
      </body>
    </html>
  );
}