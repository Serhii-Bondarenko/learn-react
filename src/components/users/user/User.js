import UserAddress from "./User-address/UserAddress";

const User = (props) => {

    let {name, username, email, address} = props.user;

    return (
        <div className={'Item'}>
            <h2>{name}</h2>
            <h4>{username}</h4>
            <p>email: {email}</p>
            <UserAddress
                address={address}
            />
        </div>
    );
};

export default User;