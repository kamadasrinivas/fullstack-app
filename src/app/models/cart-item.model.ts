export interface CartItem {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
  quantity: number;
}
