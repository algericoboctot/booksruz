import { IBookImage } from "@/interfaces/frontend/books";
const fetchBooksImage = async (isbn: string): Promise<IBookImage> => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
      const data = await response.json();
      return data;
    } catch (error) {
        throw new Error('Failed to fetch book isbn');
    }
};

export default fetchBooksImage;