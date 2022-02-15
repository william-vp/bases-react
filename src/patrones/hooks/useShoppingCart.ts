import {useState} from "react";
import {Product, ProductInCart} from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({count, product}: { count: number, product: Product }) => {
        let newShoppingCart = {...shoppingCart}
        const productInCart: ProductInCart = newShoppingCart[product.id] || {...product, count: 0}
        if (Math.max(productInCart.count + count, 0) >= 1) {
            productInCart.count += count
            setShoppingCart({...newShoppingCart, [product.id]: productInCart})
        } else {
            delete newShoppingCart[product.id]
            setShoppingCart(newShoppingCart)
        }

        /*let newShoppingCart = {...shoppingCart}
        if (count == 0) {
            delete newShoppingCart[product.id]
        } else {
            newShoppingCart[product.id] = {...product, count}
        }
        setShoppingCart(newShoppingCart)*/
    }

    return {
        shoppingCart, onProductCountChange
    }
}