import { IWishItem } from "@/interfaces/frontend/wish";

export type TypeWishAction = { type: 'TOGGLE', item: IWishItem } | { type: 'CLEAR' };