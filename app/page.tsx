import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      <h2>Hello Home Page</h2>
      <Link href="/blog">Go to blog</Link>
      <Link href="/product">Go to product page</Link>
    </div>
  );
}
