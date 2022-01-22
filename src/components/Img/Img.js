import css from './img.module.css';

const Img = ({url, setURL}) => {

    const updateImg = () => {
        setURL(`${url}?random=${Math.floor(Math.random() * (10 - 1 + 1)) + 1}`);
    }
    
    return (
        <div className={css.img}>
            <img src={url} alt="img"/>
            <button onClick={()=>updateImg()}>Update</button>
        </div>
    );
};

export {Img};