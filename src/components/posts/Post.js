const Post = ({post:{userId, id, title, body}}) => {
    return (
        <div className={'Item'}>
            <div>
                <p>userid: {userId}</p>
                <p>id: {id}</p>
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;