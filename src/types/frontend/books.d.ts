export type typeImagePath = string | undefined | boolean;
export type typeImageTitle = string | undefined | boolean;
export type BookItem = any[];
export type Genres = string[];

export type IITems = {
    id: number;
    author: string;
    slug: string;
    isbn: string;
    title: string;
    featured?: boolean;
}