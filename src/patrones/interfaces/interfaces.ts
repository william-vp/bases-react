import {ReactElement} from "react";

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[]
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
    Title: ({title}: {title?: any}) => JSX.Element;
    Image: ({image}: {image?: any}) => JSX.Element;
    Buttons: () => JSX.Element;
}