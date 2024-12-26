import React from 'react'

const ProductSearchBar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div><h3 className='text-red-800'>Product Search bar</h3></div>
            {children}
        </div>
    )
}

export default ProductSearchBar
