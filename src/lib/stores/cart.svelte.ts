import type { Product } from '$lib/data/products';

export type CartItem = Product & { quantity: number };

let items = $state<CartItem[]>([]);

export const cart = {
  get items() { return items; },
  get total() { return items.reduce((sum, i) => sum + i.price * i.quantity, 0); },
  get count() { return items.reduce((sum, i) => sum + i.quantity, 0); },

  add(product: Product) {
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      items = [...items, { ...product, quantity: 1 }];
    }
  },

  remove(id: number) {
    items = items.filter(i => i.id !== id);
  },

  updateQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      cart.remove(id);
      return;
    }
    const item = items.find(i => i.id === id);
    if (item) item.quantity = quantity;
  },

  clear() {
    items = [];
  }
};
