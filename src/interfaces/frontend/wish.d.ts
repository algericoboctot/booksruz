export interface IWishItem {
    id: string;
    isbn: string;
    title: string;
    isWished: boolean;
}

export interface IWishState {
    items: IWishItem[],
    totalWished: number;
    isWished: boolean;
}

export interface IWishContextType {
    items: IWishItem[],
    isWished: boolean,
    totalWished: number,
    addItem: (item: IWishItem) => void,
    clearAllWish: () => void;
}