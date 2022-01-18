import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import './postsPage.css'
import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(response => setPosts(response))
    }, [])

    return (
        <>
            <div className={'posts info-arr'}>
                {posts.map(post => <Post key={post.id} item={post}/>)}
            </div>

            <div className={'target-info'}>
                <Outlet/>
            </div>
        </>
    );
};

export default PostsPage;