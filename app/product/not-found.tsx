import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <p>
                Product not found
                sorry
                check again
            </p>
            <p>Requested product does not exists</p>
            <Link className='text-red-500' href="/product">return product page</Link>
        </div>
    )
}