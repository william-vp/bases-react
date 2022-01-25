import {useState} from "react";
import PropTypes from "prop-types";

interface Props {
    initialValue?: number;
}

interface StateCounter {
    counter: number;
    clicks: number;
}

export const CounterBy = ({initialValue = 0}: Props) => {
    const [{counter, clicks}, setCount] = useState<StateCounter>({
        counter: initialValue,
        clicks: 0
    });

    const handleClick = (value:number) => {
        setCount(({clicks, counter}) => ({
            counter: counter + value,
            clicks: clicks + 1
        }));
    }
    
    return (
        <>
            <h1>CounterBY: {counter}</h1>
            <h1>Clicks: {clicks}</h1>
            <button onClick={() => handleClick(5)}>+5</button>
            <button onClick={() => handleClick(1)}>+1</button>
        </>
    );
}
