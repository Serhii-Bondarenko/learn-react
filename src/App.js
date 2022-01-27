import React, {useReducer} from 'react';

import './App.css';

const reducer = (state, action) => {

    switch (action.type) {
        case 'inc':
                return {...state, [action.name]: state[action.name] + 1}
        case 'dec':
            return {...state, [action.name]: state[action.name] - 1}
        case 'reset':
            return {...state, [action.name]: action.payload}
        default:
            return state

    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0})

    return (
        <>
            <div>
                <p>Count: {state.count1}</p>
                <button onClick={() => dispatch({type: 'inc', name: 'count1'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec' , name: 'count1'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', name: 'count1', payload: 0})}>Reset</button>
            </div>
            <div>
                <p>Count: {state.count2}</p>
                <button onClick={() => dispatch({type: 'inc', name: 'count2'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec', name: 'count2'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', name: 'count2', payload: 0})}>Reset</button>
            </div>
            <div>
                <p>Count: {state.count3}</p>
                <button onClick={() => dispatch({type: 'inc', name: 'count3'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec', name: 'count3'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', name: 'count3', payload: 0})}>Reset</button>
            </div>
        </>
    );
};

export default App;