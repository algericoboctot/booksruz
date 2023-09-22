'use client';

import { useContext } from "react";
import CartContext from "@/store/frontend/cart/cartcontext";
import CartOrderSummary from "./checkoutsummary";
import Link from "next/link";
import { User } from "@/types/users";


const CheckOutInfo = () => {

    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount;
    const totalQty = cartCtx.totalQty;

    return (
        <>
            <div className="container px-4 2xl:px-0">

                <h1 className="text-[24px] lg:text-[30px] xl:text-[40px] font-medium mb-[19px] capitalize">Cart Page</h1>
                <div>
                    <Link href="/my-cart">&lt; Back to cart</Link>
                </div>
                <div className="flex w-10/12 mx-auto">
                    <div className="flex flex-auto w-3/5 flex-row pr-4">
                        <div></div>
                        <div className="ml-auto"><Link href="/api/auth/signout">Signout</Link></div>
                    </div>
                    <div className="flex-auto w-2/5 pl-4">
                        <CartOrderSummary totalQty={totalQty} totalAmount={totalAmount} />
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default CheckOutInfo;