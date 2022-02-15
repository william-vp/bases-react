import {useEffect, useRef, useState} from "react";
import {onChangeArgs, Product} from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {
    const [counter, setCounter] = useState(0)
    
    const isControlled= useRef(!!onChange)
    
    const increment = (value: number) => {
        if (isControlled.current) {
            return onChange!({
                count: value, product
            })
        }
        console.log('is controlled', isControlled.current)
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange && onChange({count: newValue, product})
    }
    
    useEffect(() => {
        if (value) setCounter(value)
    }, [value])

    return {
        counter,
        increment
    }
}