import React from "react";

const Form = ({createPet, register}) => {

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="cat">
                    Add Cat:
                    <input type="text" {...register("cat")}/>
                    <button onClick={() => createPet("cat", "addCat")}>Save</button>
                </label>
                <label htmlFor="dog">
                    Add Dog:
                    <input type="text" {...register("dog")}/>
                    <button onClick={() => createPet("dog", "addDog")}>Save</button>
                </label>
            </form>
            <hr/>
        </div>
    );
};

export {Form};