import HeartIcon from "@/icons/heart";
import WishContext from "@/store/frontend/wishlist/wishcontext";
import Link from "next/link";
import { useContext, useState } from "react";

const Wishlists = () => {
    const wishCtx = useContext(WishContext);
    const items = wishCtx.totalWished;

    return(
        <>
            <div className='relative'>
                
                {(items > 0) ? (<>
                    <Link className="relative" href="/wishlist">
                        <HeartIcon width="28px" height="24px" border="#FB5F5F" background="transparent" />
                    </Link>
                    <span className='absolute left-[18px] top-[-4px] text-white bg-[#FB5F5F] w-[20px] h-[20px] flex items-center justify-center text-[13px] rounded-full'>
                        {items}
                    </span>
                    </>): (<span className="relative">
                        <HeartIcon width="28px" height="24px" border="#FB5F5F" background="transparent" />
                    </span>)}
            </div>
        </>
    );
}

export default Wishlists;