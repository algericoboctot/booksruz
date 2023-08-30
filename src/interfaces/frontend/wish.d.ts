export interface IWishItem {
    id: string;
    isbn: string;
    title: string;
    price: number;
    isWished: boolean;
    amount?: number;
    colors: {
        border: string;
        background: string;
        btnBorder: string;
    }
}

export interface IWishState {
    items: IWishItem[],
    totalWished: number;
    isWished: boolean;
    colors: {
        border: string;
        background: string;
        btnBorder: string;
    }
}

export interface IWishContextType {
    items: IWishItem[],
    isWished: boolean,
    totalWished: number,
    colors: {
        border: string;
        background: string;
        btnBorder: string;
    },
    addItem: (item: IWishItem) => void,
    clearAllWish: () => void;
}