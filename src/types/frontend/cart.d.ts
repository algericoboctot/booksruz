import { ICartItem } from "@/interfaces/frontend/cart";

export type TypeCartAction = { type: 'ADD', item: ICartItem } | { type: 'REMOVE', id: string } | { type: 'CLEAR' };