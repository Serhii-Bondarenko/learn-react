const Comment = ({comment: {postId,id, name, email, body}}) => {
    return (
        <div className={'Item'}>
            <div>
                <p>postId: {postId}</p>
                <p>id: {id}</p>
            </div>
            <h3>{name}</h3>
            <div>
                <p>email: {email}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comment;