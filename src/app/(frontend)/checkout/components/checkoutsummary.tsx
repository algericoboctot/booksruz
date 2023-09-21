'use client';

import { FC } from "react";

const CartOrderSummary: FC<{totalQty: number, totalAmount: number}>= ({totalQty, totalAmount}) => {
    const inTotalAmount = totalAmount.toFixed(2);
    return(
        <>
            <div className="basis-full mx-auto md:basis-10/12 lg:basis-4/12 lg:mx-0 border-[#260448] border-[2px] p-5 rounded-[12px] flex flex-col flex-wrap">
                <div>
                    <h3 className="mb-4 text-[20px] font-medium">Order Summary</h3>
                    <div className="flex flex-row flex-wrap">
                        <span className="mr-auto">
                            Total Qty: 
                        </span>
                        <span className="ml-auto">{totalQty}</span>
                    </div>
                    <div className="flex flex-row flex-wrap">
                        <span className="mr-auto">
                            Total Amount: 
                        </span>
                        <span className="ml-auto">{inTotalAmount}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartOrderSummary;