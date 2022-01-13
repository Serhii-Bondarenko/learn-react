const User = ({user, getItem}) => {

    return (

        <div className={'user'}>

            <p>id: {user.id}</p>
            <h2>{user.name}</h2>
            <h4>{user.username}</h4>
            <p>{user.email}</p>

            <button type='button' onClick={() => getItem(user)}>
                Details
            </button>

        </div>

    );
};

export default User;