import {useReducer} from "react";
import counterReducer from "./state/CounterReducer";
import {CounterState} from "./interface/interfaces";
import {doDecrement, doIncreaseBy, doReset} from "./actions/actions";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducerComponent = () => {
    const [{counter, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleIncrease = (value: number) => dispatch(doIncreaseBy(value));
    const handleDecrement = () => dispatch(doDecrement());
    const handleReset = () => dispatch(doReset());

    return (
        <>
            <h1>Counter Reducer Srg: </h1>
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
