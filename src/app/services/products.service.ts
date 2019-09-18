import { Injectable } from '@angular/core';
import { Product } from '../models/product';
// import Data from './products.json';

const Data = {
    "products": [
      {
        "id": 1,
        "name": "Adult Male Bike",
        "price": 20.50,
        "image": "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
        "product_type": "bike"
      },
      {
        "id": 2,
        "name": "Adult Female Bike",
        "price": 20.50,
        "image": "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
        "product_type": "bike"
      },
      {
        "id": 3,
        "name": "Kids Unisex Bike",
        "price": 12.75,
        "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
        "product_type": "bike"
      },
      {
        "id": 4,
        "name": "Adult Unisex Helmet",
        "price": 4.00,
        "image": "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
        "product_type": "accessory"
      },
      {
        "id": 5,
        "name": "Kids Unisex Helmet",
        "price": 3.50,
        "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
        "product_type": "accessory"
      },
      {
        "id": 6,
        "name": "Insurance",
        "price": 9.99,
        "image": "http://via.placeholder.com/250x250?text=Insurance",
        "product_type": "addon"
      }
    ]
  }

@Injectable()
export class ProductsService {
  private products: Array<Product>;
  constructor() { }

  fetchProducts() {
    this.products = Data.products.map(product => {
      let prod = new Product();
      prod.map(product);
      return prod;
    });
    return this.products;
  }

  getProducts() {
      return this.products;
  }
}