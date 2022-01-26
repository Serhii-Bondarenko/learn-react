import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import './singleLocationPage.css';
import {charactersService} from "../../services";
import {multipleCharacters} from "../../helperFunctions";
import {Character} from "../../components";
import {Loader} from "../../components/Loader/Loader";

const SingleLocationPage = () => {

    const [loading, setLoading] = useState(true);

    const {state} = useLocation();
    const {name, residents} = state;

    const [chousenResidents, setChousenResidents] = useState([]);

    useEffect(() => {

        if (residents.length === 0) {
            setChousenResidents(`there are no residents on the ${name}`);
            setLoading(!loading);

        } else if (residents.length === 1) {
            charactersService.getByLink(residents[0])
                .then(response => {
                    setChousenResidents(response)
                    setLoading(!loading)
                })

        } else {
            charactersService.getPart(multipleCharacters.getByLinksArr(residents))
                .then(response => {
                    setChousenResidents(response)
                    setLoading(!loading)
                });
        }

    }, [])

    return (
        <>
            {loading ?
                <Loader/> : <div className={'single-loc'}>
                    <h2>Residents of <span>{name}</span></h2>

                    <div className={'characters-list'}>
                        {typeof chousenResidents === 'string' ?
                            <div className={'not-found'}>{chousenResidents}</div> :

                            Array.isArray(chousenResidents) ?
                                chousenResidents.map(item => <Character key={item.id} character={item}/>) :
                                <Character character={chousenResidents}/>
                        }
                    </div>
                </div>}
        </>
    );
};

export {SingleLocationPage};