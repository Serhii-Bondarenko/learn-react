const UserAddressGeo = (props) => {

    let {lat, lng} = props.geo;

    return (
        <ol>
            <i>geo</i>
            <li>{lat}</li>
            <li>{lng}</li>
        </ol>
    );
};

export default UserAddressGeo;