"use client";

import { useEffect, useState } from 'react';
import { IItemDetails } from '@/interfaces/frontend/books';
import BookImage from '../bookimage/bookimage';

const BookDetail = ( { title, author, isbn, slug, price, genre, summary, quantity } : IItemDetails) => {
    const [colors, setColors] = useState<string[]>([
        '#FF1493',
        '#FF6347',
        '#7C00FF',
        '#5599F5',
        '#FF8C00',
        '#0C0',
        '#06C',
        '#BA55D3',

    ]);

    const [genres, setGenres] = useState<{ genre: string; color: string; }[]>([]);

    useEffect(() => {

        const genreDetail = async() => {
            const merge  = await genre.map((genre, indx) => ({
                genre,
                color: colors[indx % colors.length]
            }));
    
            setGenres(merge);
        }
        genreDetail();
      }, [genre, colors]);


    return(
        <>
            <div className="flex flex-col flex-wrap md:flex-row">
                <div className='flex flex-col flex-wrap basis-full lg:basis-[34%] mb-[60px] lg:mb-0'>
                    <div className='mx-auto lg:mx-0 w-full max-w-[340px] lg:max-w-[519px]'>
                        <div className='w-full  h-[460px] md:h-[560px] xl:h-[770px] mb-[17px] lg:mb-[34px]'>
                            <BookImage isbn={isbn} imgSize='object-fill'/>
                        </div>
                        
                        <ul className='w-full flex flex-wrap'>
                            { genres.map((item) => (
                                    <li 
                                        style={{backgroundColor: item.color, borderColor: item.color}} 
                                        className="rounded-[18px] px-4 py-[4px] text-white text-base lg:text-xl font-medium mx-[14px] first:ml-0" 
                                        key={item.genre}
                                    >
                                        {item.genre}
                                    </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className='lg:pl-[60px] basis-full lg:basis-[66%]'>
                    <h1 className='text-[24px] lg:text-[30px] xl:text-[40px] font-medium mb-[19px] capitalize'>{title}</h1>
                    <p className='text-[20px] lg:text-[28px] leading-[12px] lg:leading-[20px] text-[#575D6A] mb-5'>
                        Author: { author }
                    </p>
                    <p className='pt-3 text-[20px] lg:text-[28px] leading-[155%] border-t-[2.6px] border-[#F1F1F1] text-[#575D6A]'>
                        {summary}
                    </p>
                </div>
            </div>

            
        </>
    );
}

export default BookDetail;