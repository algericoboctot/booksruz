'use client';

import { ICartAddRemoveItem, ICartItem } from "@/interfaces/frontend/cart";
import CartImage from "@/ui/placeholders/cartimage/cartimage";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

const CartPageComponentItem: FC<ICartAddRemoveItem> = (props) => {
    const { title, id, isbn, price, slug, amount, removeOne, removeAll, addOne } = props;

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
            <div className="flex flex-row flex-wrap mb-4">
                <div className="mr-auto flex flex-row flex-wrap mb-4 gap-4 basis-3/4">
                    <div className="w-[80px] h-[95px]">
                        <CartImage isbn={isbn} imgSize='object-fill'/>
                    </div>
                    <div>
                        <h4 className="font-bold">{title}</h4>
                        <p>Product Code: {id}</p>
                    </div>
                </div>
                <div className="ml-auto flex flex-row flex-wrap gap-5 basis-1/4">
                    <div className="">
                        <h5>{price}</h5>
                    </div>
                    <div className="flex flex-col flex-wrap">
                        <div className="mb-4">
                            <p>Qty: {amount}</p>
                        </div>
                        <div className="flex flex-row flex-wrap gap-2">
                            <button className="ml-auto w-[20px] h-[20px] text-white bg-[#260448] leading-[20px]" onClick={removeOne}><span className="text-[16px]">&#120;</span></button>
                            <button className="ml-auto w-[20px] h-[20px] text-white bg-[#260448] leading-[20px]" onClick={addOne}><span className="text-[16px]">&#43;</span></button>
                        </div>
                        <div>
                            <button className="ml-auto w-[20px] h-[20px] text-white bg-[#260448] leading-[20px]" onClick={removeAll}><span className="text-[16px]">Remove all item</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPageComponentItem;