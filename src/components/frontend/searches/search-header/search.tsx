"use client";
import { useEffect, useState } from "react";
import { FormEvent, ChangeEvent } from "react";
import debounce from 'lodash.debounce';
import useQueryBooks from "@/libs/frontend/useQueryBooks";
import { useRouter } from "next/navigation";

import classes from './searchHeader.module.css';
import Link from 'next/link';

const SearchHeader = () => {
    const { isLoading, isError, data } = useQueryBooks();

    //useState Hooks
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const [noResultsFound, setNoResultsFound] = useState<boolean>(false);
    const [totalBooks, setTotalBooks] = useState<number>(0);
    const [searchResults, setSearchResults] = useState<string[]>([]);
    
    const router = useRouter();

    //Filtered data base on search input
    const filteredBooks = data?.filter(
        (book: any) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Handle the debouncing of data while typing on search input
    const handleSearchDebounced = debounce((term: string) => {
        setSearchTerm(term);
        setSearchActive(term.trim() !== "");
        setNoResultsFound(false);
    }, 500);

    const handleSearch = (term: string) => {
        handleSearchDebounced(term);
    };

    useEffect(() => {
        setNoResultsFound(searchActive);
    }, [searchActive]);

    useEffect(() => {
        setNoResultsFound(filteredBooks?.length === 0);
    }, [filteredBooks]);

    useEffect(() => {
        setTotalBooks((searchActive || noResultsFound) ? filteredBooks?.length || 0 : data?.length || 0);
    }, [searchActive, noResultsFound, filteredBooks, data]);

    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        await handleSearch(event.target.value);
        await setSearchTerm(event.target.value);
        await setSearchResults(filteredBooks);
    };

    const handleSearchFocus = () => {
        setSearchActive(true);
    };
    
    const handleSearchBlur = () => {
        setTimeout(() => {
            setSearchActive(false);
        }, 200); 
    };
    
    const submitSearch = (event: FormEvent) => {
        event.preventDefault();
        handleSearch(searchTerm);
        const encodedSearchTerm = encodeURI(searchTerm);
        if (searchTerm.trim() !== '') {
            // Redirect to the search page with the search query as a query parameter
            router.replace(`/search?q=${encodedSearchTerm}`);
        }
    }

    return(
        <>
            <div className={`${classes['search-header']} pt-[19px] pb-[21px]`}>
                <div className="container px-4 2xl:px-0">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto relative w-full max-w-[955px]">
                            <form className="relative w-full" onSubmit={submitSearch} action="">
                                <div className="relative z-0">
                                    <label htmlFor="search-input" className="absolute z-0 text-[18px] lg:text-[24px] text-[#8A8A8A]">Book Title</label>
                                    <svg className="absolute w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] z-20 left-4 top-[14px] lg:top-[17px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#0A63F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 22L20 20" stroke="#0A63F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <input className="
                                        relative 
                                        z-10 
                                        h-[48px] 
                                        text-[18px] 
                                        lg:text-[24px] 
                                        lg:h-[60px] 
                                        text-[#8A8A8A] 
                                        pl-[48px] 
                                        py-4 
                                        pr-[170px]
                                        lg:pr-[180px]
                                        w-full 
                                        left-0 
                                        top-0 
                                        bg-[#F2F3F6] 
                                        rounded-[14px] 
                                        focus:outline-none focus:ring-[#06C]" 
                                        id="search-input" 
                                        type="text" 
                                        placeholder="Book Title"
                                        onChange={handleInputChange}
                                        onBlur={handleSearchBlur}
                                        />
                                </div>
                                <button className="
                                        absolute 
                                        right-[10px]
                                        top-[4px]
                                        lg:top-[10px]
                                        z-10 
                                        w-[120px] 
                                        h-[40px] 
                                        py-[4px] 
                                        px-4
                                        rounded-[8px] 
                                        bg-[#0A63F9] 
                                        text-white 
                                        font-medium
                                        text-[16px] 
                                        leading-[100%]
                                        lg:text-[22px] 
                                        border-[3px] border-[#06C]" 
                                        type="submit">Search</button>
                            </form>
                            {(searchActive) && 
                                <div className="absolute left-0 bg-white w-full p-[20px] h-auto">
                                    <span className="text-[14px] leading-[150%] lg:text-[18px] md:ml-auto text-[#3A3B7B]/50">
                                        {(searchActive && !noResultsFound) ? (`${totalBooks} available books found`) : ''} {(noResultsFound) && 'No books found!'}
                                    </span>
                                    {(searchActive && !noResultsFound) && filteredBooks.map((item: any) => (<Link key={item.id} href={item.slug} className="block">{item.title}</Link>))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchHeader;