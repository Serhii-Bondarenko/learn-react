import './Shuttle.css';

const Shuttle = (props) => {

    let {mission_name, launch_year, mission_patch_small} = props

    return (
        <div className={'Item'}>
            <h3>{mission_name}</h3>
            <p>{launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Shuttle;