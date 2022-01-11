import {useEffect, useState} from "react";

import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => setPosts(response))

    }, [])

    return (
        <div className={'Posts-list'}>
            {
                posts.map(post =>
                    <Post
                        key={post.id}
                        post={post}
                    />)
            }
        </div>
    );
};

export default Posts;