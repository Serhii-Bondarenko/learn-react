import React, {useEffect, useState} from 'react';

import './episodesPage.css';
import {charactersService} from "../../services";
import {Episode} from "../../components";
import {urls} from "../../configs";
import {btnFunk} from "../../helperFunctions";

const EpisodesPage = () => {

    const [episodes, setEpisodes] = useState([]);

    const [url, setURL] = useState(urls.episodes);
    const [info, setInfo] = useState({});

    const [nxtStatus, setNxtStatus] = useState(false);
    const [prvStatus, setPrvStatus] = useState(true);

    useEffect(() => {
        charactersService.getByLink(url)
            .then(response => {
                setInfo({...response.info})
                setEpisodes([...response.results])
            })
    }, [url]);

    return (
        <div className={'page'}>
            <img src="https://i.pinimg.com/originals/4b/fa/3d/4bfa3d4defc8e015c5898446d8d5b35c.png" alt="RickAndMorty"/>
            <div className={'content-wrap'}>
                <div className={'list'}>
                    {episodes.map(episode => <Episode key={episode.id} episodeItem={episode}/>)}
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

export {EpisodesPage};