import {Product} from "../interfaces/interfaces";
import coffeMug from "../coffee-mug.png";
import coffeMug2 from "../coffee-mug2.png";

const product = {
    id: '1',
    title: 'Coffe Mug',
    img: coffeMug
}

const product2 = {
    id: '2',
    title: 'Coffe Mug 2',
    img: coffeMug2
}
export const products: Product[] = [product, product2]