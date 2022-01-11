const UserAddressGeo = ({geo: {lat, lng}}) => {
    return (
        <ol>
            <i>geo</i>
            <li>{lat}</li>
            <li>{lng}</li>
        </ol>
    );
};

export default UserAddressGeo;