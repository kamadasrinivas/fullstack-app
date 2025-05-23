import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item!: CartItem;

  constructor(private cartService: CartService) { }

  updateQuantity(event: Event): void {
    const quantity = parseInt((event.target as HTMLInputElement).value);
    if (quantity > 0) {
      this.cartService.updateQuantity(this.item.product.id, quantity);
    }
  }

  removeItem(): void {
    this.cartService.removeFromCart(this.item.product.id);
  }
}
