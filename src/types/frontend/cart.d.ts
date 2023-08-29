import { ICartItem } from "@/interfaces/frontend/cart";

export type TypeCartAction = { type: 'ADD_QTY', item: ICartItem } | { type: 'ADD_ONE', item: ICartItem } | { type: 'REMOVE_ONE', id: string } | { type: 'REMOVE_ALL', id: string } | { type: 'CLEAR' };