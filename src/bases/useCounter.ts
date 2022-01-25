import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const useCounter = ({maxCount = 1}) => {
    const [count, setCount] = useState(5);
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());

    const handleClick = () => setCount(prev => Math.min(prev + 1, maxCount));

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;
        tl.current.to(elementToAnimate.current, {duration: 0.2, y: -10, ease: 'ease.out'})
            .to(elementToAnimate.current, {duration: 1, y: 0, ease: 'bounce.out'})
            .pause();
    }, []);
    
    useEffect(() => {
        tl.current.play(0);
    }, [count]);

    return {
        elementToAnimate, count, handleClick
    }
}