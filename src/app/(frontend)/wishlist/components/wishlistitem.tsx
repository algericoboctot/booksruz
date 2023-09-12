import BookImage from "@/app/(frontend)/books/[book]/components/bookimage/bookimage";
import { IWishItem } from "@/interfaces/frontend/wish";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import AddWishPage from "./addwish";

const WishListItem: FC<IWishItem> = (props) => {
    const {title, slug, isbn, author, colors, isWished} = props;
    const [path, setPath ] = useState<string>();
    const pathname = usePathname();
    useEffect(() => {
        if ( pathname.includes('/books') ) {
            setPath(`/${slug}`);
        } else {
            setPath(`/books/${slug}`);
        }
    }, [path]);
    return(
        <>
            <div className="relative w-full sm:w-1/2 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] lg:w-1/3 xl:flex-[0_0_25%] xl:w-1/4 mb-[40px] lg:mb-[67px] xl:mb-[107px] sm:px-4">
                <Link className="relative z-0" href={`${path}`} title={title}>
                    <div className='w-full h-[579px] sm:h-[479px] relative mb-[19px]'>
                        <BookImage isbn={isbn} imgSize='object-cover' />
                    </div>
                    <h4 className="text-[16px] font-medium leading-normal lg:text-[24px]">{title}</h4>
                    <p className="text-[14px] font-medium leading-normal lg:text-[18px]">by: {author}</p>
                </Link>
                <AddWishPage {...props}/>
            </div>
        </>
    );
}

export default WishListItem;