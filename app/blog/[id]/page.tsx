import React from 'react'

const BlogPageDynamic = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <p>BlogPageDynamic {params.id}</p>
        </div>
    )
}

export default BlogPageDynamic
