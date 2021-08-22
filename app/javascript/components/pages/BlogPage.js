import React from 'react';
import '../molecules/AppBar';
import '../molecules/Content';
import PageTemplate from "./PageTemplate";

function BlogPage() {

    const posts = getBlogPosts();

    return (
        <PageTemplate key='blog' dbPromise={posts}>
        </PageTemplate>
    )
}

const getBlogPosts = async () => {
    console.log('test')
    const response = await fetch('/api').catch(e => alert(e));
    const data = await response.json().catch(e => alert(e));
    return data;
}

export default BlogPage;