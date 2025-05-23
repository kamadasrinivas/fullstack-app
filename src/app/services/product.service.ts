import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'Latest smartphone with high-end features',
      price: 699.99,
      imageUrl: 'assets/images/smartphone.svg'
    },
    {
      id: 2,
      name: 'Laptop',
      description: 'Powerful laptop for work and gaming',
      price: 1299.99,
      imageUrl: 'assets/images/laptop.svg'
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling wireless headphones',
      price: 199.99,
      imageUrl: 'assets/images/headphones.svg'
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Fitness tracking smartwatch with heart rate monitor',
      price: 249.99,
      imageUrl: 'assets/images/smartwatch.svg'
    },
    {
      id: 5,
      name: 'Tablet',
      description: 'Lightweight tablet with high-resolution display',
      price: 399.99,
      imageUrl: 'assets/images/tablet.svg'
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
