import {useContext} from "react";
import noImage from "../../patrones/assets/no-image.jpg";
import styles from "../../patrones/styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductImage = ({img = ''}) => {
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
        <img src={imgShow} className={styles.productImg} alt=""/>
    );
}