"use client";
import { IItem } from "@/interfaces/frontend/books";
import BookItem from "@/app/(frontend)/books/[book]/components/bookitem/bookitem";
import BookItemLoader from "@/ui/placeholders/bookitem-loader/bookitemloader";
const BooksLists = ( 
        {bookData, nextPage, sortLoading} : 
        {bookData: any, nextPage: boolean, sortLoading: boolean} 
    ) => {
    return(
        <>
            <div className="container px-4 2xl:px-0 mb-[39px] lg:mb-[49px] xl:mb-[89px] relative z-0 top-0">
                <div className={`flex flex-col sm:flex-row sm:flex-wrap sm:mx-[-16px] px-4 sm:px-0 2xl:px-0 ${ nextPage  ? ' relative z-0' : ''}`}>
                    {bookData?.map((book: IItem) => 
                        (!sortLoading ? <BookItem key={book.id} {...book}/> : <BookItemLoader key={book.id} />)
                    )}
                    { nextPage  && (
                        <div className="absolute bg-white/[.60] left-0 top-0 w-full h-full z-10">  
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default BooksLists;