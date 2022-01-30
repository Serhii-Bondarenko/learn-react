import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Comment, Loader} from '../../components';
import {getAllComments} from '../../store';

const CommentsPage = () => {

    const dispatch = useDispatch();

    const {comments, status, error} = useSelector(state => state['commentReducer']);

    useEffect(() => {
        if(!comments.length) dispatch(getAllComments());
    }, [])

    return (
        <div className='wrap-list'>
            {status === 'loading' && <Loader/>}
            {error && <h2>Ooops something wrong...</h2>}
            <div className={'list'}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {CommentsPage};