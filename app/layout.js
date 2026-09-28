export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Products Store</h1>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>© 2026 Products Store</p>
        </footer>
      </body>
    </html>
  );
}