const User = ({user}) => {

    return (
        <div className={'user'}>
            <h2>{user.name}</h2>--
            <p>{user.username}</p>--
            <p>{user.email}</p>
        </div>
    );
};

export default User;