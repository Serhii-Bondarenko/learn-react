const UserPost = ({post:{userId, id, title, body}}) => {
    return (
        <div className={'user-post'}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default UserPost;