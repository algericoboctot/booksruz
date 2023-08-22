import { useQuery } from "react-query";
import fetchBooks from "./fetchBooks";

const useQueryBooks = () => {
    return useQuery('books', fetchBooks);
}

export default useQueryBooks;