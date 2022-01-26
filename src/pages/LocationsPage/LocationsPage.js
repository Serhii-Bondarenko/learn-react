import React, {useEffect, useState} from 'react';

import './locationsPage.css';
import {charactersService} from "../../services";
import {urls} from "../../configs";
import {Location} from "../../components";
import {btnFunk} from "../../helperFunctions";

const LocationsPage = () => {

    const [locations, setLocations] = useState([]);

    const [url, setURL] = useState(urls.locations);
    const [info, setInfo] = useState({});

    const [nxtStatus, setNxtStatus] = useState(false);
    const [prvStatus, setPrvStatus] = useState(true);

    useEffect(() => {
        charactersService.getByLink(url)
            .then(response => {
                setInfo({...response.info})
                setLocations([...response.results])
            })
    }, [url]);

    return (
        <div className={'page'}>
            <img src="https://rick-and-morty.shop/wp-content/uploads/2021/10/Rick-and-Morty-Shop-logo1.png"
                 alt="RickAndMorty"/>
            <div className={'content-wrap'}>
                <div className={'list'}>
                    {locations.map(location => <Location key={location.id} locationItem={location}/>)}
                </div>

                <button disabled={prvStatus}
                        onClick={() => btnFunk.switch(info.prev, setURL, setNxtStatus, setPrvStatus)}>
                    <i className="fas fa-chevron-left"/>
                </button>
                <button disabled={nxtStatus}
                        onClick={() => btnFunk.switch(info.next, setURL, setPrvStatus, setNxtStatus)}>
                    <i className="fas fa-chevron-right"/>
                </button>
            </div>
        </div>
    );
};

export {LocationsPage};