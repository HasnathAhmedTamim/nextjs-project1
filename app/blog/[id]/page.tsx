import React from 'react'

const BlogPageDynamic = ({ params }: { params: { id: number } }) => {
    return (
        <div>
            <p>BlogPageDynamic {params.id}</p>
        </div>
    )
}

export default BlogPageDynamic
