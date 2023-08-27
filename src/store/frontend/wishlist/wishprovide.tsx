import { useReducer, ReactNode, FC } from "react";
import WishContext from "@/store/frontend/wishlist/wishcontext";
import { TypeWishAction } from "@/types/frontend/wish";
import { IWishState, IWishItem, IWishContextType } from "@/interfaces/frontend/wish";

const defaultWishState: IWishState = {
  items: [],
  isWished: false,
  totalWished: 0
};

const wishReducer = (state: IWishState, action: TypeWishAction): IWishState => {
    switch (action.type) {
        case 'TOGGLE':
            const itemExists = state.items.some(item => item.id === action.item.id);
            if (!itemExists) {
                const newItem: IWishItem = {
                    ...action.item,
                    isWished: true
                };
                return {
                    ...state,
                    items: [...state.items, newItem],
                    isWished: newItem.isWished,
                    totalWished: state.totalWished + 1
                };
            } else {
                const updatedItems = state.items.filter(item =>
                    item.id !== action.item.id && item.isWished === true
                );
                return {
                    ...state,
                    items: updatedItems,
                    isWished: false,
                    totalWished: state.totalWished - 1
                };
            }
        case 'CLEAR':
            return defaultWishState;
        default:
            return defaultWishState;
    }
};

// Context provider component
const WishProvider = ({ children } : {children: ReactNode} ) => {
    const [wishState, wishDispatch] = useReducer(wishReducer, defaultWishState);

    const addWishHandler = (item: IWishItem) => {
        wishDispatch({ type: 'TOGGLE', item: item });
    };

    const clearAllWishHandler = () => {
        wishDispatch({ type: 'CLEAR' });
    };

    const contextValue: IWishContextType = {
        items: wishState.items,
        isWished: wishState.isWished,
        totalWished: wishState.totalWished,
        addItem: addWishHandler,
        clearAllWish: clearAllWishHandler
    };

    return (
        <WishContext.Provider value={contextValue}>
            {children}
        </WishContext.Provider>
    );
};

export default WishProvider;