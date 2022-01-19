import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import Album from "../../components/Album/Album";

const UsersAlbumsPage = () => {

    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        userService.getAlbumsById(id)
            .then(response => setAlbums(response))
    }, [id]);

    return (
        <>
            <div className={'albums info-arr'}>
                {albums.map(album => <Album key={album.id} item={album}/>)}
            </div>

            <Outlet/>
        </>
    );
};

export default UsersAlbumsPage;