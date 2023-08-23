'use client';

import BookItem from "@/components/frontend/books/bookitem/bookitem";
import BooksLists from "@/components/frontend/books/booklists/booklists";
import Search from "@/components/frontend/searches/search/search";
import { IItem } from "@/interfaces/frontend/books";
import useQueryBooks from "@/libs/frontend/useQueryBooks";
import BookItemLoader from "@/ui/placeholders/bookitem-loader/bookitemloader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
    const search = useSearchParams();
    const { isLoading, data } = useQueryBooks();
    
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchCount, setSearchCount] = useState<number>(0);

    useEffect(() => {
        // Fetch search results based on the query parameter when the page loads
        const query = search?.get('q');
        setSearchTerm(query || "");
        // For this example, let's use a mock search function
        if (query && query.trim() !== '') {
            // For this example, let's use a mock search function
            const filteredBooks = data?.filter(
                (book: any) =>
                  book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  book.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredBooks);
            setSearchCount(filteredBooks?.length);
        } else {
            setSearchResults([]);
            setSearchCount(0);
        }
    }, [data, searchTerm, search]);


    return(
        <>  
            <Search />
            <div className="container px-4 2xl:px-0 py-4">
                <ul className="flex justify-start text-[18px]">
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li className="mx-4">
                        &#47;
                    </li>
                    <li>
                        <span>search</span>
                    </li>
                </ul>
            </div>
            <div className="container px-4 2xl:px-0 mb-[39px] lg:mb-[49px] xl:mb-[89px] relative z-0 top-0">
                <h1 className='text-[48px] text-[#0F172A] font-medium mb-[16px] mr-auto pr-4 capitalize'>Search</h1>
                {(searchResults?.length > 0) ? <p className="text-[#313248] text-[24px] lg:text-[28px] md:mr-auto font-medium leading-[150%] mb-5">{searchCount} Search results &#34;{searchTerm}&#34;</p> : <p className="text-[#313248] text-[24px] lg:text-[28px] md:mr-auto font-medium leading-[150%] mb-5">0 Search results</p> }
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:mx-[-16px] px-4 sm:px-0 2xl:px-0">
                    {(searchResults?.length > 0) && searchResults?.map((book: IItem) => 
                        <BookItem key={book.id} {...book}/>
                    )}
                </div>
            </div>            
        </>
    );
}

export default SearchPage;