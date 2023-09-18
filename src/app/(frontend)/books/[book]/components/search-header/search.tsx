"use client";
import { useEffect, useState } from "react";
import { FormEvent, ChangeEvent } from "react";
import debounce from 'lodash.debounce';
import useQueryBooks from "@/libs/frontend/useQueryBooks";
import { useRouter } from "next/navigation";

import classes from './searchHeader.module.css';
import Link from 'next/link';
import useDebounce from "@/libs/frontend/useDebounce";
import { RESULT_SIZE } from "@/types/frontend/books";

const RESULT_SIZE: RESULT_SIZE = 10;
const SearchHeader = () => {
    const { isLoading, isError, data } = useQueryBooks();

    //useState Hooks
    const [searchTerm, setSearchTerm] = useState<string>("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const [noResultsFound, setNoResultsFound] = useState<boolean>(false);
    const [totalBooks, setTotalBooks] = useState<number>(0);
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [visibleResults, setVisibleResults] = useState<number>(RESULT_SIZE);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [allResultsLoaded, setAllResultsLoaded] = useState(false);
    const [showAllResultsLoadedMessage, setShowAllResultsLoadedMessage] = useState(false);

    
    const router = useRouter();

     //Filtered data base on search input
     const filteredBooks = data?.filter(
        (book: any) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        setSearchActive(term.trim() !== "");
        setNoResultsFound(false);
    };

    useEffect(() => {
        handleSearch(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

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
        await setSearchTerm(event.target.value);
    };

    const handleSearchFocus = (event: ChangeEvent<HTMLInputElement>) => {
        const inputVal = event.target.value;
        setSearchActive(inputVal.trim() !== "");
    };

    const submitSearch = (event: FormEvent) => {
        event.preventDefault();
        handleSearch(searchTerm);
        const encodedSearchTerm = encodeURI(searchTerm);
        if (searchTerm.trim() !== '') {
            // Redirect to the search page with the search query as a query parameter
            router.replace(`/search?q=${encodedSearchTerm}`);
            setSearchResults([]);
        }
    };
    
    const handleLoadMore = () => {
        if (visibleResults >= totalResults) {
            setAllResultsLoaded(true);

            setShowAllResultsLoadedMessage(true);
            setTimeout(() => {
            setShowAllResultsLoadedMessage(false);
            }, 1500);

        } else {
            setIsLoadingMore(true);

            // Add a delay of 1000 milliseconds (adjust as needed)
            setTimeout(() => {
              const newVisibleResults = Math.min(
                visibleResults + RESULT_SIZE,
                totalResults
              );
              setVisibleResults(newVisibleResults);
              setIsLoadingMore(false);

            }, 1000); // Adjust the delay duration (in milliseconds) as needed
        }
    };

    const handleClearSearch = () => {
        // Reset the visible results to the initial value
        setTimeout(() => {
            setSearchActive(false);
            setSearchTerm("");
            setAllResultsLoaded(false); // Reset the allResultsLoaded state
            setVisibleResults(RESULT_SIZE);
        }, 300); 
    };

    useEffect(() => {
        setTotalResults(filteredBooks?.length || 0);
    }, [filteredBooks]);

    return(
        <>
            <div className={`${classes['search-header']} pt-[19px] pb-[21px] relative z-10`}>
                <div className="container px-4 2xl:px-0">
                    <div className="flex flex-wrap items-center">
                        <div className="mx-auto relative w-full max-w-[955px]">
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
                                        onFocus={handleSearchFocus}
                                    />
                                    {(searchActive || filteredBooks?.length >= 0) && ((searchActive && !noResultsFound) && (
                                            <button onClick={handleClearSearch} type="button" className="text-[#0A63F9] absolute z-10 right-[145px] text-[20px] top-1/2 translate-y-[-50%]">x</button>
                                        )
                                    )}
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
                            
                            {(searchActive || filteredBooks?.length >= 0) && ((searchActive && !noResultsFound) && 
                                (
                                    <div className="absolute left-0 bg-white w-full p-[20px] h-auto">
                                        <div className="text-[14px] leading-[150%] lg:text-[18px] md:ml-auto text-[#3A3B7B]/50">
                                            {(searchActive && !noResultsFound) ? (`${totalBooks} available books found`) : ''} {(noResultsFound) && 'No books found!'}
                                        </div>
                                        <ul className="mb-4">
                                            {(searchActive && !noResultsFound) && (
                                                filteredBooks.slice(0, visibleResults).map((item: any) => (
                                                    <li key={item.id}>
                                                    <Link href={`/books/` + item.slug} className="block">
                                                        {item.title}
                                                    </Link>
                                                    </li>
                                                )))
                                            }
                                        </ul>
                                        {allResultsLoaded ? 
                                            <div>
                                                {showAllResultsLoadedMessage &&
                                                    <p>
                                                        All results loaded
                                                    </p>
                                                }
                                            </div> 
                                        : 
                                            ((totalResults >= RESULT_SIZE) && (!allResultsLoaded)) && 
                                            <button 
                                                onClick={handleLoadMore} 
                                                disabled={isLoadingMore} 
                                                type="button"
                                            >
                                                {isLoadingMore ? 'loading...' : 'Load more'}
                                            </button>
                                        }
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchHeader;