const fetchBooks = async () => {
    try {
        const response = await fetch('https://nextjs-cour-78109-default-rtdb.asia-southeast1.firebasedatabase.app/books.json');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch books');
    }
}

export default fetchBooks;