import {useEffect, useState} from "react";

import Comment from "./Comment";

const Comments = () => {
    
    let [comments, setComments] = useState([])
    
    useEffect(()=> {
        
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(response => setComments(response))
        
    }, [])
    
    return (
        <div className={ "Comments-list"}>
            {
                comments.map(comment =>

                    <Comment
                        key={comment.id}
                        comment={comment}
                    />

                )
            }
        </div>
    );
};

export default Comments;