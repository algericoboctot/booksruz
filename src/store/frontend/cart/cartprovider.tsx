'use client';

import { useReducer, ReactNode, useEffect } from "react";
import CartContext from "./cartcontext";
import { ICartItem, ICartState, ICartContextType } from "@/interfaces/frontend/cart";
import { TypeCartAction } from "@/types/frontend/cart";

const defaultCartState: ICartState = {
  items: [],
  totalAmount: 0,
  totalQty: 0
};

const CART_STORAGE_KEY = 'cart';

const cartReducer = (state: ICartState, action: TypeCartAction) => {
  
  let updatedTotalAmount,
      existingCartItemIndex, 
      existingCartItem,
      existingItem,
      updatedItem,
      updatedTotalQty,
      updatedItems;

  switch(action.type) {
    case 'REPLACE':
      return action.cart;
    case 'ADD_QTY':
      updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      updatedTotalQty = state.totalQty + action.item.amount;

      existingCartItemIndex = state.items.findIndex(
        (item: ICartItem) => item.id === action.item.id
      );

      existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
          itemTotalPrice: existingCartItem.price * action.item.amount
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQty: updatedTotalQty
      };
    case "ADD_ONE": 
      updatedTotalAmount = state.totalAmount + action.item.price;
      

      existingCartItemIndex = state.items.findIndex(
        (item: ICartItem) => item.id === action.item.id
      );

      existingCartItem = state.items[existingCartItemIndex];
      updatedTotalQty = state.totalQty + 1;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
          itemTotalPrice: (existingCartItem.price * existingCartItem.amount) + existingCartItem.price
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQty: updatedTotalQty
      };
    case "REMOVE_ONE":
      existingCartItemIndex = state.items.findIndex(
        (item: ICartItem) => item.id === action.id
      );
    
      existingItem = state.items[existingCartItemIndex];
    
      updatedTotalAmount = state.totalAmount - existingItem.price;
      updatedTotalQty = state.totalQty - 1;
    
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item:ICartItem) => item.id !== action.id);
      } else {
        updatedItem = {
          ...existingItem, 
          amount: existingItem.amount - 1,
          itemTotalPrice: (existingItem.price * existingItem.amount) - existingItem.price
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQty: updatedTotalQty
      };
    case "REMOVE_ALL":
      existingCartItemIndex = state.items.findIndex(
        (item: ICartItem) => item.id === action.id
      );
    
      existingItem = state.items[existingCartItemIndex];
    
      updatedTotalAmount = state.totalAmount - (existingItem.amount * existingItem.price);
      updatedTotalQty = state.totalQty - existingItem.amount;

      if (existingItem.amount >= 0) {
        updatedItems = state.items.filter((item:ICartItem) => item.id !== action.id);
      } else {
        updatedItem = {...existingItem, amount: existingItem.amount - existingItem.amount};
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQty: updatedTotalQty
      };
    case "CLEAR":
      return defaultCartState;
    default:
      return defaultCartState;
  }
}

const CartProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Retrieve cart data from session storage when the component mounts
  useEffect(() => {
    const storedCart = sessionStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      dispatchCartAction({ type: 'REPLACE', cart: JSON.parse(storedCart) });
    }
  }, []);

  // Save cart data to session storage whenever it changes
  useEffect(() => {
    // Save cart data to session storage whenever it changes
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));

    // Clear session storage if the cart is empty
    if (cartState.items.length === 0) {
      sessionStorage.removeItem(CART_STORAGE_KEY);
    }
  }, [cartState]); 

  const addItemQtyToCartHandler = async (item: ICartItem) => {
    dispatchCartAction({ type: 'ADD_QTY', item: item });
  };

  const addItemOneCartHandler = async (item: ICartItem) => {
    dispatchCartAction({ type: 'ADD_ONE', item: item });
  }

  const removeItemOneFromCartHandler = async (id: string) => {
    dispatchCartAction({ type: 'REMOVE_ONE', id: id });
  };

  const removeItemAllFromCartHandler = async (id: string) => {
    dispatchCartAction({ type: 'REMOVE_ALL', id: id });
  };

  const clearCartHandler = async () => {
    dispatchCartAction({type: 'CLEAR'});
  };

  const cartContext: ICartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalQty: cartState.totalQty,
    addItemQty: addItemQtyToCartHandler,
    addOne: addItemOneCartHandler,
    removeOne: removeItemOneFromCartHandler,
    removeAll: removeItemAllFromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;