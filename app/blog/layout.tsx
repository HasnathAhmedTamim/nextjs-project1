import React from 'react'

const BlogSearchBar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div><h3 className='text-red-800'>Blog Search  bar</h3></div>
            {children}
        </div>
    )
}

export default BlogSearchBar
