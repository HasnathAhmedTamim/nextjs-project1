import React from 'react'

const NextBlogPageDynamic = ({ params }: { params: { slug: number } }) => {
    return (
        <div>
            <p>Next BlogPageDynamic {params.slug}</p>
        </div>
    )
}

export default NextBlogPageDynamic
