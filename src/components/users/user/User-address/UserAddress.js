import UserAddressGeo from "./UserAddressGeo";

const UserAddress = ({address: {street, suite, city, zipcode, geo}}) => {

    return (
        <ul>
            Address
            <li>{street}</li>
            <li>{suite}</li>
            <li>{city}</li>
            <li>{zipcode}</li>
            <UserAddressGeo
                geo={geo}
            />
        </ul>
    );
};

export default UserAddress;