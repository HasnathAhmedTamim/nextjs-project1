import React from 'react'
import NotFound from '../not-found'

const ProductId = ({ params }: { params: { product_id: string } }) => {
    if (parseInt(params.product_id) > 15) {
        return NotFound()
    }
    return (
        <div>
            <p>The product id is {params.product_id} </p>
        </div>
    )
}

export default ProductId
