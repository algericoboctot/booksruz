export interface IItem {
    id: string;
    author: string;
    slug: string;
    isbn: string;
    title: string;
    featured?: boolean;
}

export interface IBookImage {[]
    items: Array<{
        volumeInfo: {
            title: string;
            imageLinks: {
                thumbnail: string;
            };
        };
    }>;
}

export interface IItemDetails extends IItem {
    price: number;
    genre: string[];
    publication_date: string;
    publisher: string;
    quantity: number;
    summary: string;
}