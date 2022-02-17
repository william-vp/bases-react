import {useEffect, useRef, useState} from "react";
import {InitialValues, onChangeArgs, Product} from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number,
    initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted= useRef(false)

    const increment = (value: number) => {
        let newValue = Math.max(counter + value, 0)
        if (initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter(newValue)
        onChange && onChange({count: newValue, product})
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
        onChange && onChange({count: 0, product})
    }
    
    useEffect(() => {
        isMounted.current = true
    }, [])
    
    useEffect(() => {
        if (!isMounted.current) return;
        if (value) setCounter(value)
    }, [value])

    return {
        counter, 
        maxCount: initialValues?.maxCount || 0, 
        isMaxCountReached: initialValues?.maxCount && counter >= initialValues.maxCount || false,
        increment, reset
    }
}