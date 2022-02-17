import {CSSProperties, ReactElement} from "react";
import {ButtonProps} from "../../lazyload/components/ProductButtons";

export interface ProductCardProps {
    product: Product,
    children: (args: ProductCardHandlers) => JSX.Element,
    className?: string,
    style?: CSSProperties,
    onChange?: (args: onChangeArgs) => void
    value?: number,
    initialValues?: InitialValues
}

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface onChangeArgs {
    product: Product,
    count: number,
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
    maxCount?: number;
}

export interface ProductCardMainProps {
    ({children, product}: ProductCardProps): JSX.Element;
    Title: (Props: { title?: any, className?: string, style?: CSSProperties }) => JSX.Element;
    Image: (Props: { image?: any, className?: string, style?: CSSProperties }) => JSX.Element;
    Buttons: (Props: ButtonProps) => JSX.Element;
}

export interface ProductInCart extends Product {
    count: number
}

export interface ProductCardHandlers{
    count: number;
    isMaxCountReached?: boolean;
    maxCount?: number;
    product: Product;
    increment: (value: number) => void;
    reset: () => void;
}