import { IWishItem, IWishState } from "@/interfaces/frontend/wish";

export type TypeWishAction = { type: 'TOGGLE', item: IWishItem } | { type: 'CLEAR' } | { type: 'REPLACE', item: IWishState };