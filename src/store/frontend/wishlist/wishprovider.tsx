import { useReducer, ReactNode, FC, useEffect } from "react";
import WishContext from "@/store/frontend/wishlist/wishcontext";
import { TypeWishAction } from "@/types/frontend/wish";
import { IWishState, IWishItem, IWishContextType } from "@/interfaces/frontend/wish";

const defaultWishState: IWishState = {
    items: [],
    isWished: false,
    totalWished: 0,
    colors: {
        border: "#000000",
        background: "transparent",
        btnBorder: "#F2F3FB"
    },
};

const WISHLIST_STORAGE_KEY = 'wishlist';

const wishReducer = (state: IWishState, action: TypeWishAction): IWishState => {
    switch (action.type) {
        case 'REPLACE':
            return action.item; 
        case 'TOGGLE':
            const itemExists = state.items.some(item => item.id === action.item.id);
            if (!itemExists) {
                const newItem: IWishItem = {
                    ...action.item,
                    isWished: true,
                    colors: {
                        border: "#FB5F5F",
                        background: "transparent",
                        btnBorder: "#EBECF1"
                    }
                };
                return {
                    ...state,
                    items: [...state.items, newItem],
                    isWished: newItem.isWished,
                    colors: newItem.colors,
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
                    colors: {
                        border: "#000000",
                        background: "#F2F3FB",
                        btnBorder: "#F2F3FB"
                    },
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

    // Retrieve cart data from session storage when the component mounts
    useEffect(() => {
        const storeWishList = sessionStorage.getItem(WISHLIST_STORAGE_KEY);
        if (storeWishList) {
            wishDispatch({ type: 'REPLACE', item: JSON.parse(storeWishList) });
        }
    }, []);

    // Save cart data to session storage whenever it changes
    useEffect(() => {
        sessionStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishState));
    }, [wishState]); 

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
        colors: wishState.colors,
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