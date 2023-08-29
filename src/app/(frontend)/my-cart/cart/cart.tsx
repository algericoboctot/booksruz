'use client';

import CartContext from "@/store/frontend/cart/cartcontext";
import Link from "next/link";
import { useContext, useState } from "react";
import CartPageComponentItem from "./cartitem";
import classes from './cart.module.css';
import { ICartItem } from "@/interfaces/frontend/cart";

const CartPageComponent = () => {
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const cartItemRemoveAllHandler = async (id: string) => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        cartCtx.removeAll(id);
        setIsLoading(false);
    };

    const cartItemRemoveOneHandler = (id: string) => {
        cartCtx.removeOne(id);
    };

    const cartItemAddOneHandler = (item: ICartItem) => {
        cartCtx.addOne(item);
    };

    return(
        <>
            <div className="flex flex-row flex-wrap justify-center">
                <div className="basis-10/12">
                    <div className="flex flex-row flex-wrap gap-4">
                        <div className="basis-full">
                            <h3 className="mb-4 text-[20px] font-medium">Order Details</h3>
                            <p>{cartItems.length} items in your cart</p>
                        </div>
                        {
                            (cartItems.length > 0) 
                                ? 
                                <div className={`basis-7/12 ${classes['cart-bg']} text-white p-4 rounded-xl`}>
                                    {cartItems.map(item => (
                                        <CartPageComponentItem 
                                            key={item.id} 
                                            {...item}
                                            removeAll={cartItemRemoveAllHandler.bind(null, item.id)}
                                            removeOne={cartItemRemoveOneHandler.bind(null, item.id)}
                                            addOne={cartItemAddOneHandler.bind(null, item)}
                                        />
                                    ))}
                                </div>
                                :
                                <p className="text-[24px]">It seems like you dont have any books on the cart. You can browse books <Link href="/books" className="text-[#FB5F5F]">here</Link> to look for your wanted book.</p>
                        }
                        <div className="basis-5/12">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPageComponent;