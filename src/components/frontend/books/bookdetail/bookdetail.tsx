"use client";

import { useContext, useEffect, useState } from 'react';
import { IItemDetails } from '@/interfaces/frontend/books';
import BookImage from '@/components/frontend/books/bookimage/bookimage';
import Rating from '@/components/frontend/rating/rating';
import WishList from '@/components/frontend/wishlist/wishlist';
import AddToCart from '@/components/frontend/addtocart/addcart';
import CartContext from '@/store/frontend/cart/cartcontext';
import { ICartItem } from '@/interfaces/frontend/cart';

const BookDetail = ( { title, author, isbn, slug, price, genre, summary, quantity, id } : IItemDetails) => {
    const cartCtxt = useContext(CartContext);

    const cartItemAddHandler = (item: ICartItem) => {
        cartCtxt.addItem(item);
    };

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
                <div className='flex flex-col flex-wrap basis-full lg:basis-[34%] mb-[60px] lg:mb-0 order-2 lg:order-1'>
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
                <div className='lg:pl-[60px] basis-full lg:basis-[66%] order-1 mb-8 lg:order-2'>
                    <div className="flex items-end">
                        <div>
                            <h1 className='text-[24px] lg:text-[30px] xl:text-[40px] font-medium mb-[19px] capitalize'>{title}</h1>
                            <p className='text-[20px] lg:text-[28px] leading-[12px] lg:leading-[20px] text-[#575D6A] mb-5'>
                                Author: { author }
                            </p>
                            <Rating />
                        </div>
                        <div className='ml-auto mb-4 flex flex-wrap flex-col md:flex-row md:gap-2'>
                            <WishList />
                        </div>
                    </div>
                    <div className='py-3 border-t-[2.6px] border-[#F1F1F1] flex flex-row flex-wrap items-center'>
                        <div className='mr-auto text-xl'>&#36; {price}</div><AddToCart id={id} price={price} title={title} />
                    </div>
                    <p className='pt-3 text-[20px] lg:text-[28px] leading-[155%] border-t-[2.6px] border-[#F1F1F1] text-[#575D6A]'>
                        {summary}
                    </p>
                </div>
            </div>

            
        </>
    );
}

export default BookDetail;