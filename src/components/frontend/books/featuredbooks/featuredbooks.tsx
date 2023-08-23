import BookItem from '@/components/frontend/books/bookitem/bookitem';
import { IItem } from '@/interfaces/frontend/books';
import fetchBooks from '@/libs/frontend/fetchBooks';


const FeaturedBooksList = async ( {data} : { data: any }) => {
        const books = await fetchBooks();
        const featuredBooks = books?.filter((book: any) => book.featured === true);
        return (
            <>
                <h2 className='text-[48px] text-[#0F172A] font-medium mb-[16px]'>Featured Books</h2>
                <div className='flex flex-col sm:flex-row sm:flex-wrap sm:mx-[-16px]'>
                    {featuredBooks?.map((book: IItem) => (
                        <BookItem key={book.id} {...book}  />
                    ))}
                </div>
            </>
        );
}

export default FeaturedBooksList;