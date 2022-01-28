import React from "react";

const Dog = ({item, dogs, deletePet}) => {
    return (
        <>
            <div>
                <p>{item.name}</p>
                <button onClick={() => deletePet(item.name, dogs, "dogs")}>Delete</button>
            </div>
            <hr/>
        </>
    );
};

export {Dog};