import {createContext} from "react";
import styles from '../../patrones/styles/styles.module.css'
import {useProduct} from "../../patrones/hooks/useProduct";
import {ProductContextProps, ProductCardProps} from "../../patrones/interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className = '', style, onChange, value}: ProductCardProps) => {
    const {counter, increment} = useProduct({product, onChange, value});
    return (
        <Provider value={{counter, increment, product}}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
