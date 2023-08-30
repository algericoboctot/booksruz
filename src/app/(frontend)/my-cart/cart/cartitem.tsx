'use client';
import Link from 'next/link';

import { ICartAddRemoveItem, ICartItem } from "@/interfaces/frontend/cart";
import CartImage from "@/ui/placeholders/cartimage/cartimage";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

const CartPageComponentItem: FC<ICartAddRemoveItem> = (props) => {
    const { title, id, isbn, slug, itemTotalPrice, amount, removeOne, removeAll, addOne } = props;

    const [path, setPath ] = useState<string>();
    const pathname = usePathname();

    const intItemTotalPrice = `$${itemTotalPrice?.toFixed(2)}`;

    console.log(itemTotalPrice);

    useEffect(() => {
        if ( pathname.includes('/books') ) {
            setPath(`/${slug}`);
        } else {
            setPath(`/books/${slug}`);
        }
    }, [path]);
    return(
        <>
            <div className="flex flex-row flex-wrap mb-4">
                <div className="xl:mr-auto flex flex-row flex-wrap gap-4 basis-full mb-5 lg:mb-0 lg:basis-3/4 items-center justify-start lg:pr-[25px]">
                    <div className="w-[80px] h-[95px] border-white border-[1px]">
                        <Link href={`${path}`}>
                            <CartImage isbn={isbn} imgSize='object-fill'/>
                        </Link>
                    </div>
                    <div>
                        <h4 className="font-bold"><Link href={`${path}`}>{title}</Link></h4>
                        <p>Product Code: {id}</p>
                    </div>
                    <div className="ml-auto flex flex-row flex-wrap">
                        <p className='mr-[20px]'>Qty: {amount}</p>
                        <h5 className='ml-auto'>{intItemTotalPrice}</h5>
                    </div>
                </div>
                <div className="ml-auto flex flex-row flex-wrap basis-full lg:basis-1/4 justify-end items-center">
                    <div className="flex flex-row flex-wrap gap-2 ">
                        <button className="w-[20px] h-[20px] text-white bg-[#260448] leading-[20px]" onClick={removeOne}><span className="text-[16px]">&#45;</span></button>
                        <button className="w-[20px] h-[20px] text-white bg-[#260448] leading-[20px]" onClick={addOne}><span className="text-[16px]">&#43;</span></button>
                    </div>
                    <button className="text-white ml-5 leading-[20px]" onClick={removeAll}><span className="text-[16px]">Remove all</span></button> 
                </div>
            </div>
        </>
    );
}

export default CartPageComponentItem;