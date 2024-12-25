import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h1>Page is does not exist!!!!!!!</h1>
            <Link className='text-red-500' href="/">return home</Link>
        </div>
    )
}

export default NotFound
