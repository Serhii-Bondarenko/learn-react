import React from "react";

const Form = ({createPet, register, errors, resetError}) => {

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="cat">
                    Add Cat:
                    <input type="text" {...register("cat", {onChange: resetError})}/>
                    <button onClick={() => createPet("cat", "addCat")}>Save</button>
                </label>

                {errors.emptyInput && <span>{errors.emptyInput}</span>}

                <label htmlFor="dog">
                    Add Dog:
                    <input type="text" {...register("dog", {onChange: resetError})}/>
                    <button onClick={() => createPet("dog", "addDog")}>Save</button>
                </label>
            </form>
            <hr/>
        </div>
    );
};

export {Form};