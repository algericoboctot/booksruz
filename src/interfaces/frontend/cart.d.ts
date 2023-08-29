export interface ICartItem {
    id: string;
    slug: string;
    isbn: string;
    title: string;
    price: number;
    amount: number;
}
export interface ICartState {
    items: ICartItem[];
    totalAmount: number;
}

export interface ICartContextType {
    items: ICartItem[];
    totalAmount: number;
    addItemQty: (item: ICartItem) => void;
    addOne: (item:ICartItem) => void;
    removeOne: (id: string) => void;
    removeAll: (id: string) => void;
    clearCart: () => void;
}

export interface ICartAddRemoveItem extends ICartItem {
    itemTotalAmount?: number;
    removeAll?: () => void;
    removeOne?: () => void;
    addOne?: () => void;
}