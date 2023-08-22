'use client';

import { useEffect, useState } from "react";
import debounce from 'lodash.debounce';
import Banner from "@/components/frontend/banner/banner";
import GenresList from "@/components/frontend/genreslist/genreslist";
import Search from "@/components/frontend/search/search";
import BookListLoader from "@/ui/placeholders/booklist-loader/booklistplaceholder";
import Pagination from '@/components/frontend/pagination/pagination';
import BooksLists from "@/components/frontend/booklists/booklists";
import useQueryBooks from "@/libs/frontend/useQueryBooks";
import Newsletter from "@/components/frontend/newsletter/newsletter";


const PAGE_SIZE = 16;

const Books = ({searchParams} : { searchParams: { [key: string]: string | string[] | undefined }}) => {
    const { isLoading, isError, data } = useQueryBooks(); 

    //useState Hooks
    const [nextPage, setNextPage] = useState<boolean>(false);

    //Handles Pagination
    const page = Number(searchParams.page) || 1;
    const totalPages = data ? Math.ceil(data?.length / PAGE_SIZE) : 1;
    const startIndex = (page - 1) * PAGE_SIZE;
    const currentBooksList = data?.slice(startIndex, startIndex + PAGE_SIZE);


    const handlePaginationClick = async () => {
        await setNextPage(true);
    };

    //useEffects
    useEffect(() => {
        if (nextPage) {
            const timeoutId = setTimeout(() => {
                setNextPage(false);
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [nextPage]);

    if (isError) {
        return(
            <>
                <div className="container px-4 2xl:px-0">
                    <h2>Error fetching data</h2>
                </div>
            </>
        );
    }
    return(
        <>
            <Banner />
            <Search />
            <GenresList />
            {isLoading ? <BookListLoader /> : 
                <BooksLists 
                    bookData={currentBooksList} 
                    nextPage={nextPage} 
                    sortLoading={false}
                />
            }

            {(data && totalPages > 1) && (
                <Pagination 
                    page={page} 
                    totalPages={totalPages} 
                    handlePagination={handlePaginationClick} />
            )}
            <Newsletter />
        </>
    );
}

export default Books;