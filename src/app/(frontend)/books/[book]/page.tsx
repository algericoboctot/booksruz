import BookDetail from "@/app/(frontend)/books/[book]/components/bookdetail/bookdetail";
import { IItemDetails } from '@/interfaces/frontend/books';
import fetchBooks from "@/libs/frontend/fetchBooks";
import SearchHeader from "./components/search-header/search";
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
                {
                    bookDetail?.map((item:IItemDetails) => <BookDetail key={item.id} {...item} />)
                }
            </div>
        </>
    );
}

export default BookPageDetail;
