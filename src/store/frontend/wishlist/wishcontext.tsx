import { IWishContextType, IWishItem } from '@/interfaces/frontend/wish';
import { createContext } from 'react';

// Make sure to import the correct type
const WishContextValue: IWishContextType = {
    items: [],
    isWished: false,
    totalWished: 0,
    addItem: (item: IWishItem) => {},
    clearAllWish: () => {}
}

const WishContext = createContext<IWishContextType>(WishContextValue);

export default WishContext;