import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from '../../store';
import {Loader, Post} from '../../components';

const PostsPage = () => {

    const dispatch = useDispatch();

    const {posts, status, error} = useSelector(state => state['postReducer']);

    useEffect(() => {
        if(!posts.length) dispatch(getAllPosts());
    }, []);

    return (
        <div className='wrap-list'>
            {status === 'loading' && <Loader/>}
            {error && <h2>Ooops something wrong...</h2>}
            <div className={'list'}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export {PostsPage};