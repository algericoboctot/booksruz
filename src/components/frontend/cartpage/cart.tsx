'use client';

import CartContext from "@/store/frontend/cart/cartcontext";
import Link from "next/link";
import { useContext } from "react";
import CartPageComponentItem from "./cartitem";

const CartPageComponent = () => {
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;

    console.log(cartCtx.items);
    return(
        <>
            <div className="flex flex-row flex-wrap justify-center">
                <div className="basis-10/12">
                    {
                        (cartItems.length > 0) ? 
                        <>
                            <div className="">
                                {cartItems.map(item => (
                                    <CartPageComponentItem key={item.id} {...item} />
                                ))}
                            </div>
                        </> :
                        <>
                            <>It seems like you dont have any books on the cart. You can browse books <Link href="/books">here.</Link></>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default CartPageComponent;