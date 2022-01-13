const UserInfo = ({
                      chosenUser: {id, name, username, email, phone},
                      address: {street, suite, city, zipcode},
                      geo: {lat, lng},
                      company,
                      getItemPosts
                  }) => {

    return (
        <div className={'user-info'}>
            <p>id: {id}</p>
            <h2>{name}</h2>
            <h4>{username}</h4>
            <p>email: {email}</p>
            <p>phone: {phone}</p>

            <ul>
                ADDRESS
                <li>{street}</li>
                <li>{suite}</li>
                <li>{city}</li>
                <li>zipcode: {zipcode}</li>
                <ol>
                    geo
                    <li>lat: {lat}</li>
                    <li>lng: {lng}</li>
                </ol>
            </ul>

            <ul>
                COMPANY
                <li>{company.name}</li>
                <li>{company.catchPhrase}</li>
                <li>{company.bs}</li>
            </ul>

            <button onClick={() => {
                getItemPosts(id)
            }}>
                User posts
            </button>

        </div>
    );
};

export default UserInfo;