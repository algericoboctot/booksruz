'use client';

import WishContext from "@/store/frontend/wishlist/wishcontext";
import { useContext } from "react";
import WishListItem from "./wishlistitem";

const WishListsListing =() => {
    const wishCtx = useContext(WishContext);
    const wishItems = wishCtx.items;
    
    return(
        <>
            <div className={`flex flex-col sm:flex-row sm:flex-wrap sm:mx-[-16px] px-4 sm:px-0 2xl:px-0`}>
                {
                    wishItems.map( item =>(
                        <WishListItem key={item.id} {...item} />
                    ))
                }
            </div>
        </>
    );
}

export default WishListsListing;