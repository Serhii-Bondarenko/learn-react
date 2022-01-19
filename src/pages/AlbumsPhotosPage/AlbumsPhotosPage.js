import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './albumsPhotosPage.css';
import {albumService} from "../../services/albums.service";
import Photo from "../../components/Photo/Photo";

const AlbumsPhotosPage = () => {

    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(() => {
        albumService.getPhotosById(albumId)
            .then(response => setPhotos(response))
    }, [albumId])

    return (
        <div className={'photos info-arr'}>
            {photos.map(photo => <Photo key={photo.id} item={photo}/>)}
        </div>
    );
};

export default AlbumsPhotosPage;