const UserInfo = ({chosenUser: {id, name, username, email, phone}, address, company, geo, getItemPosts}) => {

    return (
        <div className={'user-info'}>
            <p>id: {id}</p>
            <h2>{name}</h2>
            <h4>{username}</h4>
            <p>email: {email}</p>
            <p>phone: {phone}</p>

            <ul>
                {Object.keys(address).map(key =>
                    <li>
                        {key !== 'geo' ? `${key}: ${address[key]}` : Object.keys(geo).map(innerKey =>

                            <p>{`${innerKey}: ${geo[innerKey]}`}</p>)}
                    </li>)}
            </ul>

            {Object.keys(company).map(key => <p>{key}: {company[key]}</p>)}

            <button onClick={() => {
                getItemPosts(id)
            }}>User posts</button>

        </div>
    );
};

export default UserInfo;