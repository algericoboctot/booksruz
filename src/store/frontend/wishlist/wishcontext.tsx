"use client";

import { IWishContextType, IWishItem } from '@/interfaces/frontend/wish';
import { createContext } from 'react';

// Make sure to import the correct type
const WishContextValue: IWishContextType = {
    items: [],
    isWished: false,
    totalWished: 0,
    colors: {
        border: "#F2F3FB",
        background: "#F2F3FB",
        btnBorder: "#F2F3FB"
    },
    addItem: (item: IWishItem) => {},
    clearAllWish: () => {}
}

const WishContext = createContext<IWishContextType>(WishContextValue);

export default WishContext;