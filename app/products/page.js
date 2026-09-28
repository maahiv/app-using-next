import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>Products Page</h1>

      <p>Here are our products:</p>

      <Link href="/products/1">Product 1</Link><br />
      <Link href="/products/2">Product 2</Link><br />
      <Link href="/products/3">Product 3</Link><br />
      <Link href="/products/4">Product 4</Link><br />
      <Link href="/products/5">Product 5</Link><br />
      <Link href="/products/6">Product 6</Link><br />
      <Link href="/products/7">Product 7</Link><br />
      <Link href="/products/8">Product 8</Link><br />
      <Link href="/products/9">Product 9</Link><br />
      <Link href="/products/10">Product 10</Link>
    </div>
  );
}