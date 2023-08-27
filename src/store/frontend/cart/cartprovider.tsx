import { useReducer, ReactNode } from "react";
import CartContext from "./cartcontext";
import { ICartItem, ICartState, ICartContextType } from "@/interfaces/frontend/cart";
import { TypeCartAction } from "@/types/frontend/cart";

const defaultCartState: ICartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: ICartState, action: TypeCartAction) => {
  
  let updatedTotalAmount,
      existingCartItemIndex, 
      existingCartItem,
      itemTotalAmount,
      updateItemTotalAmout,
      existingItem,
      updatedItem,
      updatedItems;

  switch(action.type) {
    case 'ADD':
      updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      existingCartItemIndex = state.items.findIndex(
        (item: ICartItem) => item.id === action.item.id
      );

      existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
          itemTotalAmount: itemTotalAmount
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      existingCartItemIndex = state.items.findIndex(
        (item: ICartItem) => item.id === action.id
      );
    
      existingItem = state.items[existingCartItemIndex];
    
      updatedTotalAmount = state.totalAmount - existingItem.price;

      console.log(updateItemTotalAmout);
    
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item:ICartItem) => item.id !== action.id);
      } else {
        updatedItem = {...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
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

  const addItemToCartHandler = async (item: ICartItem) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = async (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const clearCartHandler = async () => {
    dispatchCartAction({type: 'CLEAR'});
  };

  const cartContext: ICartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;