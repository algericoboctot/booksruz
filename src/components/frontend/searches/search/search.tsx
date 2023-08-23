import { FormEvent, ChangeEvent, FC } from "react";
import { useState, useEffect } from "react";
import debounce from 'lodash.debounce';
import { useRouter } from "next/navigation";
import useQueryBooks from "@/libs/frontend/useQueryBooks";
import Link from "next/link";

const RESULT_SIZE = 5;
const Search = () => {
    const { isLoading, data } = useQueryBooks();

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

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        setSearchActive(term.trim() !== "");
        setNoResultsFound(false);
    };

    //Handle the debouncing of data while typing on search input
    const handleSearchDebounced = debounce((term: string) => {
        handleSearch(term);
    }, 500);

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
        await handleSearchDebounced(event.target.value);
        await setSearchTerm(event.target.value);
    };

    const handleSearchFocus = () => {
        setSearchActive(true);
    };
    
    const handleSearchBlur = () => {
        setTimeout(() => {
            setSearchActive(false);
        }, 500); 
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
    }

    return(
        <>
            <div className="container px-4 2xl:px-0 py-[48px] lg:py[68px] xl:py-[84px] relative z-10">
                <div className="md:flex md:flex-row md:items-center mb-5 lg:mb-6">
                    <h4 className="text-[#313248] text-[24px] lg:text-[28px] md:mr-auto font-medium leading-[150%]">Let&apos;s discover your next reading adventure!</h4>
                    <h5 className="text-[14px] leading-[150%] lg:text-[18px] md:ml-auto text-[#3A3B7B]/50">{(searchActive && !noResultsFound) ? (`${totalBooks} available books found`) : ''} {(noResultsFound) && 'No books found!'}</h5>
                </div>
                <div className="relative">
                    <form className="relative" onSubmit={submitSearch} action="">
                        <div className="relative z-0">
                            <label htmlFor="search-input" className="absolute z-0 text-[18px] lg:text-[24px] text-[#8A8A8A]">Book Title</label>
                            <svg className="absolute w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] z-20 left-4 top-[17px] lg:top-[26px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#0A63F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 22L20 20" stroke="#0A63F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <input className="
                                relative 
                                z-10 
                                h-[58px] 
                                text-[18px] 
                                lg:text-[24px] 
                                lg:h-[78px] 
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
                                right-[14px]
                                top-[7px]
                                lg:top-[12px]
                                z-10 
                                w-[145px] 
                                h-[43px] 
                                lg:w-[155px] 
                                lg:h-[53px] 
                                py-[4px] 
                                px-4
                                rounded-[8px] 
                                bg-[#0A63F9] 
                                text-white 
                                font-medium
                                text-[16px] 
                                lg:text-[22px] 
                                leading-[150%] border-[3px] border-[#06C]" 
                                type="submit">Search</button>
                    </form>
                    {(searchActive || filteredBooks?.length > 0) && 
                        <div className="absolute left-0 bg-white w-full p-[20px] h-auto">
                            <ul>
                            {(searchActive && !noResultsFound) && filteredBooks.map((item: any) => (<li key={item.id}><Link href={`books/`+item.slug} className="block">{item.title}</Link></li>))}
                            </ul>
                        </div>
                    }
                </div>

            </div>
        </>
    );
}

export default Search;