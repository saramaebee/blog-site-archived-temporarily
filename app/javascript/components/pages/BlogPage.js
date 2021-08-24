import React from 'react';
import '../molecules/AppBar';
import '../molecules/Content';
import PageTemplate from "./PageTemplate";

function BlogPage() {

    return (
        <PageTemplate key='blog' fetchUrl={'/api/all'}>
        </PageTemplate>
    )
}


export default BlogPage;