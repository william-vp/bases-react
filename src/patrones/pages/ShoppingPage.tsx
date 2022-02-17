import {ProductImage, ProductTitle, ProductButtons, ProductCard} from "../../lazyload/components";
import '../styles/custom-styles.css'
import {products} from "../data/products";
import {useShoppingCart} from "../hooks/useShoppingCart";

const product = products[0]

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr/>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProductCard product={product}
                             className='bg-dark'
                             key={product.id}
                             initialValues={{
                                 count: 4,
                                 maxCount: 10
                             }}>
                    { ({reset, increment, count, isMaxCountReached}) => (<>
                        <ProductImage className='custom-image'/>
                        <ProductTitle className='text-bold text-white'/>
                        <ProductButtons className='custom-buttons'/>
                        
                        <button onClick={reset}>Reset</button>
                        <button onClick={() => increment(-2)}>- 2</button>
                        {!isMaxCountReached && <button onClick={() => increment(2)}>+ 2</button>}
                        <span className='text-white'> {count}</span>
                    </>)}
                </ProductCard>
            </div>

        </div>
    );
};