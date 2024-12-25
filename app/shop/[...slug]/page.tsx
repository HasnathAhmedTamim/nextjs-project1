import React from 'react'

const ShopArea = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <p>All the segment {params.slug} </p>
        </div>
    )
}

export default ShopArea
