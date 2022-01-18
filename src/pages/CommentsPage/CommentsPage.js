import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import Comment from "../../components/Comment/Comment";

const CommentsPage = () => {

    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        postService.getCommentsById(id)
            .then(response => setComments(response))
    }, [id])

    return (
        <div className={'comments info-arr'}>
            {comments.map(comment => <Comment ket={comment.id} item={comment}/>)}
        </div>
    );
};

export default CommentsPage;