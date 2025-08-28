import { useState, useEffect } from 'react';
import { Dish } from '@/data/dishes';

export interface CartItem extends Dish {
  quantity: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('chicken-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (items: CartItem[]) => {
    localStorage.setItem('chicken-cart', JSON.stringify(items));
    setCartItems(items);
  };

  const addToCart = (dish: Dish) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === dish.id);
      let newItems;
      
      if (existingItem) {
        newItems = prev.map(item =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...prev, { ...dish, quantity: 1 }];
      }
      
      saveCart(newItems);
      return newItems;
    });
  };

  const removeFromCart = (dishId: string) => {
    const newItems = cartItems.filter(item => item.id !== dishId);
    saveCart(newItems);
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    
    const newItems = cartItems.map(item =>
      item.id === dishId ? { ...item, quantity } : item
    );
    saveCart(newItems);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    itemCount
  };
};