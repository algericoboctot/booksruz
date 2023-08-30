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
    const intTotalPrice = `${cartCtx.totalAmount.toFixed(2)}`;

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
                <div className="basis-full xl:basis-11/12">
                    <div className="flex flex-row flex-wrap gap-4">
                        <div className="basis-full">
                            <h3 className="mb-4 text-[20px] font-medium">Order Details</h3>
                        </div>
                        <div className="basis-full flex flex-row flex-wrap">
                            {
                                (cartItems.length > 0) 
                                    ? 
                                    <div className="basis-full mx-auto md:basis-10/12 lg:basis-8/12 lg:mx-0 lg:pr-5">
                                        <div className={` ${classes['cart-bg']} text-white p-4 rounded-xl`}>
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
                                    </div>

                                    :
                                    <p className="text-[24px]">It seems like you dont have any books on the cart. You can browse books <Link href="/books" className="text-[#FB5F5F]">here</Link> to look for your wanted book.</p>
                            }
                            <div className="basis-full mx-auto md:basis-10/12 lg:basis-4/12 lg:mx-0 border-[#260448] border-[2px] p-5 rounded-[12px] flex flex-col flex-wrap">
                                <div>
                                    <h3 className="mb-4 text-[20px] font-medium">Order Summary</h3>
                                    <div className="flex flex-row flex-wrap">
                                        <span className="mr-auto">
                                            Total: 
                                        </span>
                                        <span className="ml-auto">{intTotalPrice}</span>
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-center flex-row gap-4 justify-center'>
                                    <Link className=" bg-[#ffffff] 
                                            rounded-[8px] 
                                            w-[120px] 
                                            h-[40px] 
                                            border-[2px] 
                                            border-[#260448] 
                                            hover:bg-[#260448] 
                                            hover:text-white 
                                            transition: 
                                            text-center 
                                            text-[14px] 
                                            leading-[36px] 
                                            text-[#260448] 
                                            font-medium
                                            transition 
                                            duration-300" href="/checkout">Checkout</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPageComponent;