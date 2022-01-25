import {useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";

const MAXIMUN_COUNT = 15;

export const CounterEffect = () => {
    const [count, setCount] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => setCount(prev => Math.min(prev + 1, MAXIMUN_COUNT));

    useLayoutEffect(() => {
        if (count < 10) return;
        const tl = gsap.timeline();
        tl.to(counterElement.current, {duration: 0.2, y: -10, ease: 'ease.out'})
            .to(counterElement.current, {duration: 1, y: 0, ease: 'bounce.out'});
    }, [count]);

    return (
        <>
            <h1>CounterEffect</h1>
            <h2 ref={counterElement}>{count}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    );
}
