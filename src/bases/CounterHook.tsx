import {useCounter} from "./useCounter";

export const CounterHook = () => {
    const {elementToAnimate, count, handleClick} = useCounter({
        maxCount: 15
    });

    return (
        <>
            <h1>Counter Hook</h1>
            <h2 ref={elementToAnimate}>{count}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    );
}
