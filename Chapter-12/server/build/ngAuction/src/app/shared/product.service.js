"use strict";
// import { Injectable } from '@angular/core';
Object.defineProperty(exports, "__esModule", { value: true });
// @Injectable({
//   providedIn: 'root'
// })
class Product {
    constructor(id, title, price, rating, description, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.categories = categories;
    }
}
exports.Product = Product;
class ProductService {
    getProducts() {
        return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
    }
    getProductById(productId) {
        return products.find(p => p.id === productId);
    }
}
exports.ProductService = ProductService;
const products = [
    {
        'id': 0,
        'title': 'First Product',
        'price': 24.99,
        'rating': 4.3,
        'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'categories': ['electronics', 'hardware']
    },
    {
        'id': 1,
        'title': 'Second Product',
        'price': 64.99,
        'rating': 3.5,
        'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'categories': ['books']
    },
    {
        'id': 2,
        'title': 'Third Product',
        'price': 74.99,
        'rating': 4.2,
        'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'categories': ['electronics']
    },
    {
        'id': 3,
        'title': 'Fourth Product',
        'price': 84.99,
        'rating': 3.9,
        'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'categories': ['hardware']
    },
    {
        'id': 4,
        'title': 'Fifth Product',
        'price': 94.99,
        'rating': 5,
        'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'categories': ['electronics', 'hardware']
    },
    {
        'id': 5,
        'title': 'Sixth Product',
        'price': 54.99,
        'rating': 4.6,
        'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'categories': ['books']
    }
];
// constructor() { }
