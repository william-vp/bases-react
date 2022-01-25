import {useReducer, useState} from "react";
import PropTypes from "prop-types";
import {stat} from "fs";

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE = {
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterAction = {
    type: 'increaseBy' | 'decrement' | 'reset';
    payload?: { value: number };
}

const counterReducer = (state: CounterState, action: any): CounterState => {
    switch (action.type) {
        case 'increaseBy':
            return {
                ...state,
                counter: state.counter + action.payload.value,
                previous: state.counter,
                changes: state.changes + 1
            }
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        case 'decrement':
            return {
                counter: state.counter - 1,
                previous: state.counter,
                changes: state.changes + 1
            }
        default:
            return state;
    }
}

export const CounterReducerComponent = () => {
    const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleIncrease = (value: number) => dispatch({type: 'increaseBy', payload: {value}});
    const handleDecrement = () => dispatch({type: 'decrement'});
    const handleReset = () => dispatch({type: 'reset'});

    return (
        <>
            <h1>Counter Reducer: </h1>
            <h2>Count: {counter}</h2>
            <h2>Changes: {changes}</h2>
            <button onClick={() => handleIncrease(1)}>+1</button>
            <button onClick={() => handleIncrease(5)}>+5</button>
            <button onClick={() => handleIncrease(10)}>+10</button>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}
