import {CSSProperties, ReactElement} from "react";
import {ButtonProps} from "../../lazyload/components/ProductButtons";

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: CSSProperties
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    product: Product;
    increment: (value: number) => void;
    counter: number;
}

export interface ProductCardMainProps {
    ({children, product}: ProductCardProps): JSX.Element;
    Title: (Props: { title?: any, className?: string, style?: CSSProperties }) => JSX.Element;
    Image: (Props: { image?: any, className?: string, style?: CSSProperties }) => JSX.Element;
    Buttons: (Props: ButtonProps) => JSX.Element;
}