import { FC, useContext, useEffect, useState } from 'react';
import HeartIcon from '@/icons/heart';
import classes from '@/components/frontend/addwish/wishlist.module.css';
import WishContext from '@/store/frontend/wishlist/wishcontext';
import { IWishItem } from '@/interfaces/frontend/wish';

const AddWish: FC<IWishItem> = ({id, isbn, title, slug, author}) => {
    const wishCtx = useContext(WishContext);
    const wishItem = wishCtx.items.find(( item: IWishItem ) => item.id === id);
    const border = wishItem?.colors.border || "#000000";
    const background = wishItem?.colors.background || "transparent";
    const btnBorder = wishItem?.colors.btnBorder || "#F2F3FB";
    const [isLoading, setIsLoading] = useState<boolean>(false); 

    const addWish = async (isWished: boolean) => {
        const addedItem: IWishItem = {
            id: id,
            author: author,
            title: title,
            isbn: isbn,
            isWished: isWished,
            slug:slug,
            colors: {
                border: border,
                background: background,
                btnBorder: btnBorder
            }
        }
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        wishCtx.addItem(addedItem);
        setIsLoading(false);
    }

    const clickHandler = async () => {
        await addWish(true);
    };

    return(
        <>
            <button
                style={{border: `3px solid ${btnBorder}`}}
                className={`
                    ${classes['wishlist-btn']}
                    bg-[#F2F3FB] 
                    rounded-[8px] 
                    border-[#F2F3FB] 
                    border-[3px] 
                    text-[14px] 
                    leading-[28px] 
                    text-black 
                    w-[150px] 
                    h-[50px] 
                    hover:ease-in
                    duration-300 flex flex-wrap flex-row items-center justify-center gap-6`}
                type="button" onClick={clickHandler} disabled={isLoading}><HeartIcon width="22px" height="20px" border={border} background={background} />Wishlist</button>
        </>
    );
}

export default AddWish;