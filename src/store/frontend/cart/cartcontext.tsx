import { ICartContextType, ICartItem } from '@/interfaces/frontend/cart';
import { createContext } from 'react';

// Make sure to import the correct type
const CartContextValue: ICartContextType = {
    items: [],
    totalAmount: 0,
    addItemQty: (item: ICartItem) => {},
    addOne: (item: ICartItem) => {},
    removeOne: (id: string) => {},
    removeAll: (id: string) => {},
    clearCart: () => {}
}

const CartContext = createContext<ICartContextType>(CartContextValue);

export default CartContext;