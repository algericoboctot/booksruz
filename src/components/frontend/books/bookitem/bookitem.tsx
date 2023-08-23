"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { IItem } from "@/interfaces/frontend/books";
import BookImage from "@/components/frontend/books/bookimage/bookimage";
import { usePathname } from 'next/navigation';


const BookItem = ( { title, author, isbn, slug } : IItem ) => {
    const [featuredItem, setFeatuedItem ] = useState();
    const pathname = usePathname();
    return(
        <>
            <div className="w-full sm:w-1/2 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] lg:w-1/3 xl:flex-[0_0_25%] xl:w-1/4 mb-[40px] lg:mb-[67px] xl:mb-[107px] sm:px-4">
                <Link href={`books/${slug}`} title={title}>
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