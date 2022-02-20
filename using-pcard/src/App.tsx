import './App.css';
import {ProductCard, ProductTitle, ProductImage, ProductButtons} from "wavp-pcard";

const product = {
    id: '1',
    title: 'Coffe Mug',
    img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
}

function App() {
    return (
        <div className="App App-header">
            <h1>Hello world</h1>
            <ProductCard product={product} initialValues={{
                count: 5,
                maxCount: 10
            }}>
                {() => (
                    <>
                        <ProductImage/>
                        <ProductTitle/>
                        <ProductButtons/>
                    </>
                )}
            </ProductCard>
        </div>
    );
}

export default App;
