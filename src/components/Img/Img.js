import css from './img.module.css';

const Img = ({url, setURL}) => {

    const xxx = () => {
        setURL(`${url}?random=1`);
    }

    return (
        <div className={css.img}>
            <img src={url} alt="img"/>
            <button onClick={()=>xxx()}>Update</button>
        </div>
    );
};

export {Img};