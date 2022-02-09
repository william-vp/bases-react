import {ProductCard as ProductCardComponent} from "./ProductCard";
import {ProductTitle} from "./ProductTitle";
import {ProductImage} from "./ProductImage";
import {ProductButtons} from "./ProductButtons";
import {ProductCardMainProps} from "../../patrones/interfaces/interfaces";

export {ProductTitle} from "./ProductTitle";
export {ProductImage} from "./ProductImage";
export {ProductButtons} from "./ProductButtons";

export const ProductCard: ProductCardMainProps = Object.assign(ProductCardComponent, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});
export default ProductCard;