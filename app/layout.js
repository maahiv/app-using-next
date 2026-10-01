import Link from "next/link";
import Providers from "./providers";
import AuthButton from "./AuthButton";
import "./globals.css";

export const metadata = {
  title: "Products Store",
  description: "Explore and discover amazing products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="header">
            <div className="container navbar">
              <Link href="/" className="logo">
                Products<span>Store</span>
              </Link>

              <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <AuthButton />
              </nav>
            </div>
          </header>

          <main className="main container">{children}</main>

          <footer className="footer">
            <div className="container">
              <p>© 2026 Products Store. All rights reserved.</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}