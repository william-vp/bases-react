import '../styles/custom-styles.css'
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
                <ProductCard product={product} className='bg-dark'>
                    <ProductImage className='custom-image'/>
                    <ProductTitle className='text-bold text-white'/>
                    <ProductButtons className='custom-buttons'/>
                </ProductCard>

                <ProductCard product={product} className='bg-dark'>
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title className='text-bold text-white'/>
                    <ProductCard.Buttons className='custom-buttons' activeClass='active'/>
                </ProductCard>

                <ProductCard product={product} style={{
                    margin: '0 0.5rem',
                }}>
                    <ProductCard.Image/>
                    <ProductCard.Title/>
                    <ProductCard.Buttons/>
                </ProductCard>
            </div>
        </div>
    );
};