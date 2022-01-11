import UserAddressGeo from "./UserAddressGeo";

const UserAddress = (props) => {

    let {street, suite, city, zipcode, geo} = props.address

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