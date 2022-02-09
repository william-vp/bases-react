import {useContext} from "react";
import styles from "../../patrones/styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductTitle = ({title = '', className= ''}: { title?: string, className?: string }) => {
    const {product} = useContext(ProductContext)
    let titleShow: string = title;
    if (product.title) {
        titleShow = product.title
    }
    return (
        <span className={`${styles.productDescription} ${className}`}>{titleShow}</span>
    );
}