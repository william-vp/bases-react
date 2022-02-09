import {CSSProperties, useContext} from "react";
import styles from "../../patrones/styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export interface ButtonProps {
    className?: string;
    activeClass?: string;
    style?: CSSProperties
}

export const ProductButtons = ({className, activeClass, style}: ButtonProps) => {
    const {counter, increment} = useContext(ProductContext)
    return (
        <div className={`${styles.buttonsContainer} ${className} ${activeClass}`} style={style}>
            <button onClick={() => increment(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button onClick={() => increment(1)} className={styles.buttonAdd}>+</button>
        </div>
    )
}