import React, {useState} from 'react';
import '../molecules/AppBar';
import '../molecules/Content';
import PageTemplate from "./PageTemplate";

function BlogPage() {

    const [posts, setPosts] = useState([]);

    React.useEffect(() => {
        updatePosts().then().catch(e => console.error(e));
    }, [])

    const updatePosts = async () => {
        let posts = await getBlogPosts();
        setPosts(posts);
    }

    return (
        <PageTemplate key='blog' dbContent={posts}>
        </PageTemplate>
    )
}

const getBlogPosts = async () => {
    const response = await fetch('/api').catch(e => alert(e));
    const data = await response.json().catch(e => alert(e));
    return data;
}

export default BlogPage;