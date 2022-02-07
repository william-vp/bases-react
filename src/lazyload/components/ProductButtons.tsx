import {useContext} from "react";
import styles from "../../patrones/styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductButtons = () => {
    const {counter, increment} = useContext(ProductContext)
    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => increment(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button onClick={() => increment(1)} className={styles.buttonAdd}>+</button>
        </div>
    )
}