import {useState} from "react";
import PropTypes from "prop-types";

interface Props {
    initialValue?: number;
}

export const Counter = ({initialValue = 0}: Props) => {
    const [count, setCount] = useState(initialValue);

    const handleClick = () => setCount(prev => prev + 1);

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={handleClick}>+1</button>
        </>
    );
}
