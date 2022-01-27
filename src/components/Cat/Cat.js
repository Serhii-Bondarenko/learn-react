import React from "react";

const Cat = ({item, cats, deletePet}) => {
    return (
        <>
            <div>
                <p>{item}</p>
                <button onClick={() => deletePet(item, cats, "cats")}>Delete</button>
            </div>
            <hr/>
        </>
    );
};

export {Cat};