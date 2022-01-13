const UserPost = ({post}) => {
    return (
        <div className={'user-post'}>
            {Object.keys(post).map(key =>
                <p>{key}: {post[key]}</p>
            )}
        </div>
    );
};

export default UserPost;