export interface ICartItem {
    id: string;
    isbn: string;
    title: string;
    price: number;
    amount: number;
}
export interface ICartState {
    items: ICartItem[];
    totalAmount: number;
}

interface ICartContextType {
    items: ICartItem[];
    totalAmount: number;
    addItem: (item: ICartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}