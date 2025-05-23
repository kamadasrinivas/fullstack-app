import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  quantity: number = 1;

  constructor(private cartService: CartService) { }

  addToCart(): void {
    this.cartService.addToCart(this.product, this.quantity);
    this.quantity = 1; // Reset quantity after adding to cart
  }
}
