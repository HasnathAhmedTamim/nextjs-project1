import React from 'react'

const ShopArea = ({ params }: { params: { slug: string } }) => {
    console.log(params.slug)
    return (
        <div>
            <p>All the segment {params.slug} </p>
            <p>All the segment {params.slug[4]} slug is is array </p>
        </div>
    )
}

export default ShopArea
