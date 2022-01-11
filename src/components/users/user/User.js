import UserAddress from "./User-address/UserAddress";

const User = ({user:{name, username, email, address}}) => {
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