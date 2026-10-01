import Image from "next/image";
import Link from "next/link";
import Providers from "./providers";
import AuthButton from "./AuthButton";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  <Providers>
    <header>
  <h1>Products Store</h1>

  <nav>
    <a href="/">Home</a>{" "}
    <a href="/products">Products</a>{" "}
    <AuthButton />
  </nav>
</header>

    <main>{children}</main>

    <footer>
      <p>© 2026 Products Store</p>
    </footer>
  </Providers>
</body>
    </html>
  );
}