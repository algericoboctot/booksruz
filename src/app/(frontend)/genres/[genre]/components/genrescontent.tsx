"use client";
import Link from "next/link";
import debounce from "lodash.debounce";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import useQueryBooks from "@/libs/frontend/useQueryBooks";
import { PageProps } from '@/types/frontend/books';

import BooksLists from "@/app/(frontend)/books/components/booklists/booklists";
import Sorting from "@/app/(frontend)/genres/[genre]/components/sorting/sorting";

// Function to capitalize each word in a string
const capitalizeEachWord = (str: string) => {
    return str
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
};

const GenresContent = ( {params} : PageProps ) => {
    //object destructiong the params
    const { genre } = params;
      
    //Use Query Handling
    const { isLoading, data } = useQueryBooks();

    //useStates
    const [genreWord, setGenreWord] = useState(genre);
    const [sortData, setSortData] = useState<any>();
    const [sortedValue, setSortedValue] = useState<any>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Capitalize the genre string and update the state
  
        // Check if the genre contains a dash before formatting
        if (genre?.includes('-')) {
            setGenreWord(capitalizeEachWord(genre.replace(/-/g, ' ')))
        } else {
            setGenreWord(capitalizeEachWord(genre))
        }
    }, [genre]);

    const delayedSortItems = useCallback(
        debounce((sortedData) => {
            setSortData(sortedData);
            setLoading(false);
        }, 500),[]);

    const booksCount = data?.filter((book: any) => book.genre.includes(genreWord)).length;

    useEffect(() => {
      if (!data) return;

      setLoading(true);

      const booksByGenre = data.filter((book: any) => book.genre.includes(genreWord));

      let sorted = [...booksByGenre];
    
      switch (sortedValue) {
        case "ascending":
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "descending":
          sorted.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "title":
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "author":
          sorted.sort((a, b) => a.author.localeCompare(b.author));
          break;
        case "publication_date":
          sorted.sort((a: any, b: any) => new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime());
          break;
        default:
          break;
      }
      setSortData(sorted);
      

      delayedSortItems(sorted);

    }, [genre, genreWord, data, sortedValue, delayedSortItems]);
    
    const selectedSortHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
      setSortedValue(evt.target.value);
    };
    return(
        <>
            <div className="container px-4 2xl:px-0 py-4">
                <ul className="flex justify-start text-[18px]">
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li className="mx-4">
                        &#47;
                    </li>
                    <li>
                      <Link href="/books">books</Link>
                    </li>
                    <li className="mx-4">
                        &#47;
                    </li>
                    <li>
                        <span>{genre}</span>
                    </li>
                </ul>
            </div>

            <div className="container px-4 2xl:px-0">
                <div className="flex">
                    <h2 className='text-[48px] text-[#0F172A] font-medium mb-[16px] mr-auto pr-4 capitalize'>{genre}</h2>
                    { (booksCount > 0 || isLoading ) && (<Sorting sortHandler={selectedSortHandler} sortedValue={sortedValue} />) }
                </div>
            </div>
            <BooksLists bookData={sortData} nextPage={false} sortLoading={loading} />
        </>
    );
}

export default GenresContent;