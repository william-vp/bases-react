import {ProductImage, ProductTitle, ProductButtons, ProductCard} from "../../lazyload/components";
import '../styles/custom-styles.css'
import {products} from "../data/products";
import {useShoppingCart} from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr/>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {products.map((product) => {
                    return <ProductCard product={product} className='bg-dark'
                                        key={product.id}
                                        value={shoppingCart[product.id]?.count || 0}
                                        onChange={(e) => onProductCountChange(e)}>
                        <ProductImage className='custom-image'/>
                        <ProductTitle className='text-bold text-white'/>
                        <ProductButtons className='custom-buttons'/>
                    </ProductCard>
                })}
            </div>

            <div className="shopping-cart">
                {Object.entries(shoppingCart).map(([key, product]) => {
                    return <ProductCard product={product}
                                        className='bg-dark' key={key}
                                        style={{width: '100px'}} value={product.count}
                                        onChange={(e) => onProductCountChange(e)}>
                        <ProductImage className='custom-image'/>
                        <ProductButtons className='custom-buttons' style={{display: 'flex', justifyContent: 'center'}}/>
                    </ProductCard>
                })}
            </div>
        </div>
    );
};