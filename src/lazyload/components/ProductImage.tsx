import {CSSProperties, useContext} from "react";
import noImage from "../../patrones/assets/no-image.jpg";
import styles from "../../patrones/styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export interface ImageProps {
    img?: string;
    className?: string;
    activeClass?: string;
    style?: CSSProperties
}

export const ProductImage = ({img = '', className= '', style } : ImageProps) => {
    const {product} = useContext(ProductContext)
    let imgShow: string;
    if (img) {
        imgShow = img
    } else if (product.img) {
        imgShow = product.img
    } else {
        imgShow = noImage
    }
    return (
        <img src={imgShow} className={`${styles.productImg} ${className}`} alt={product ? product.title : 'image'} style={style} />
    );
}