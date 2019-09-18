import { Product } from './product';

export class CartItem {
    product: Product;
    quantity: number;

    constructor() {
        this.product = null;
        this.quantity = null;
    }

    map(item, qty) {
        this.product = item;
        this.quantity = qty;
    }
}