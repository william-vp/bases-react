import coffeMug from '../coffee-mug.png'
import {ProductImage, ProductTitle, ProductButtons, ProductCard} from "../../lazyload/components";

const product = {
    id: '',
    title: 'Coffe Mug',
    img: coffeMug
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr/>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>
                
                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title/>
                    <ProductCard.Buttons/>
                </ProductCard>
            </div>
        </div>
    );
};