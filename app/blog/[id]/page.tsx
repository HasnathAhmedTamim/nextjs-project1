import React from 'react';

// Dynamic Route Component
const BlogPageDynamic = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <p>Blog Page Dynamic : {params?.id}</p>
        </div>
    );
};

export default BlogPageDynamic;
