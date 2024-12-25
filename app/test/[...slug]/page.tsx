import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <p>onek jinsh {params.slug} </p>
            <p>onek jinsh {params.slug[3]} </p>
        </div>
    )
}

export default page
