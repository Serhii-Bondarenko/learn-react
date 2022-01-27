import React from "react";

const Dog = ({item, dogs, deletePet}) => {
    return (
        <>
            <div>
                <p>{item}</p>
                <button onClick={() => deletePet(item, dogs, "dogs")}>Delete</button>
            </div>
            <hr/>
        </>
    );
};

export {Dog};