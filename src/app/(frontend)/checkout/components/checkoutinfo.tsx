'use client';

import { useContext } from "react";
import CartContext from "@/store/frontend/cart/cartcontext";
import CartOrderSummary from "./checkoutsummary";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";


const CheckOutInfo = () => {
    const { data: session, status } = useSession();

    console.log(session);
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount;
    const totalQty = cartCtx.totalQty;

    return (
        <>
            <div className="container px-4 2xl:px-0">
                <div>
                    <Link href="/my-cart">Back to cart</Link>
                </div>
                <h1 className="text-[24px] lg:text-[30px] xl:text-[40px] font-medium mb-[19px] capitalize">Cart Page</h1>
                <div className="flex w-10/12 mx-auto">
                    <div className="flex-auto w-3/5">
                        <div>{ session?.user?.email}</div>
                        <div><button onClick={() => signOut()}>Signout</button></div>
                    </div>
                    <div className="flex-auto w-2/5">
                        <CartOrderSummary totalQty={totalQty} totalAmount={totalAmount} />
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default CheckOutInfo;