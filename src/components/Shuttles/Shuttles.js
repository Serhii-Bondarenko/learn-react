import {useEffect, useState} from "react";
import Shuttle from "./Shuttle";

const Shuttles = () => {

    let [shuttles, setShuttles] = useState([])

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches')
            .then(response => response.json())
            .then(response => {
                let filteredLaunchers = response.filter(item => item.launch_year !== '2020');
                setShuttles(filteredLaunchers);
            })
    }, [])


    return (
        <div className={'Shuttles'}>
            {
                shuttles.map(shuttle => <Shuttle

                        key={shuttle.launch_date_utc}
                        mission_name={shuttle.mission_name}
                        launch_year={shuttle.launch_year}
                        mission_patch_small={shuttle.links.mission_patch_small}

                    />
                )}
        </div>
    );
};

export default Shuttles;