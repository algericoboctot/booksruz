"use client";
import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { IItem } from "@/interfaces/frontend/books";
import BookImage from "@/app/(frontend)/books/[book]/components/bookimage/bookimage";
import { usePathname  } from 'next/navigation';


const BookItem: FC<IItem> = ( { title, author, isbn, slug } ) => {
    const [path, setPath ] = useState<string>();
    const pathname = usePathname();

    useEffect(() => {
        if ( pathname ) {
            setPath(`/books/${slug}`);
        } 
    }, [path,slug]);

    return(
        <>
            <div className="w-full sm:w-1/2 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] lg:w-1/3 xl:flex-[0_0_25%] xl:w-1/4 mb-[40px] lg:mb-[67px] xl:mb-[107px] sm:px-4">
                <Link href={`${path}`} title={title}>
                    <div className='w-full h-[579px] sm:h-[479px] relative mb-[19px]'>
                        <BookImage isbn={isbn} imgSize='object-cover' />
                    </div>
                    <h4 className="text-[16px] font-medium leading-normal lg:text-[24px]">{title}</h4>
                    <p className="text-[14px] font-medium leading-normal lg:text-[18px]">by: {author}</p>
                </Link>
            </div>
        </>
    );
}

export default BookItem;