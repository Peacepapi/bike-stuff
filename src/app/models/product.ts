export class Product {
  
    id: number;
    image: string;
    name: string;
    price: number;
    // just string for convenient 
    product_type: string;
  
    constructor() {
      this.id = null;
      this.image = '';
      this.name = '';
      this.price = null;
      this.product_type = '';
    }
  
    map(product) {
      this.id = product.id;
      this.image = product.image;
      this.name = product.name;
      this.price = product.price;
      this.product_type = product.product_type;
    }
  }