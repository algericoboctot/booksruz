import { Suspense, useEffect } from "react";

import BookDetail from "@/components/frontend/books/bookdetail/bookdetail";
import useQueryBooks from "@/libs/frontend/useQueryBooks";
import { IItemDetails } from '@/interfaces/frontend/books';
import fetchBooks from "@/libs/frontend/fetchBooks";
import BookImageLoader from "@/ui/placeholders/book-image-loader/book-image-loader";
import Search from "@/components/frontend/searches/search/search";
import SearchHeader from "@/components/frontend/searches/search-header/search";
import Link from "next/link";


type PageProps = {
    params: {
      book: string;
    }
}

const BookPageDetail = async ({ params } : PageProps) => {

    const data = await fetchBooks();

    const { book } = params;

    const bookDetail =  data?.filter((book: any) => book.slug.includes(params.book));

    return(
        <>
            <SearchHeader />
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
                        <span>{book}</span>
                    </li>
                </ul>
            </div>
            <div className="container px-4 pt-6 xl:pt-7 2xl:px-0 h-fit pb-[60px]">
                <Suspense fallback={<BookImageLoader />}>
                    {
                        bookDetail?.map((item:IItemDetails) => <BookDetail key={item.id} {...item} />)
                    }
                </Suspense>
            </div>
        </>
    );
}

export default BookPageDetail;
