import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserPost from "../../components/UserPost/UserPost";
import './postsOfUserPage.css'

const PostsOfUserPage = () => {

    const [userPosts, setUserPosts] = useState([])

    const {id} = useParams();

    useEffect(() => {
        userService.getPostsById(id)
            .then(response => setUserPosts(response))

    }, [id])

    return (
        <div className={'posts'}>
            {userPosts.map(userPost => <UserPost key={userPost.id} item={userPost}/>)}
        </div>
    );
};

export default PostsOfUserPage;