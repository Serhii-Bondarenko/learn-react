import React from "react";

const Cat = ({item, cats, deletePet}) => {
    return (
        <>
            <div>
                <p>{item.name}</p>
                <button onClick={() => deletePet(item.name, cats, "cats")}>Delete</button>
            </div>
            <hr/>
        </>
    );
};

export {Cat};