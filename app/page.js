
import Link from "next/link";

export const metadata = {
  title: "This is Homepage",
  description: "Welcome to my Next.js website.",
};

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Products Store</h1>
      <h1>This is Homepage</h1>

      <Link href="/posts/1">View Post 1</Link>
    </div>
  );
}
// export default function Home() {
//   return <h1>Welcome to the Products Store</h1>;
// }
