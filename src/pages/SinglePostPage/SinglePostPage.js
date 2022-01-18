import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";

import './singlePostPage.css';
import {postService} from "../../services/post.service";

const SinglePostPage = () => {

    const [post, setPost] = useState(null);
    const {id} = useParams();
    const {state} = useLocation()

    useEffect(() => {

        if (state) {
            setPost(state);
            return;
        }

        postService.getById(id)
            .then(response => setPost(response))

    }, [id])

    return (
        <>
            {post && <div className={'post item'}>
                <p>userId: {post.userId}</p>
                <p>id: {post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>

                <Link to={'comments'}><button>Comments</button></Link>
            </div>}

            <Outlet/>
        </>
    );
};

export default SinglePostPage;