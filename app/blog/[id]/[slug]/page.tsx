import React from 'react'

const NextBlogPageDynamic = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <p>Next BlogPageDynamic {params.slug}</p>
        </div>
    )
}

export default NextBlogPageDynamic
