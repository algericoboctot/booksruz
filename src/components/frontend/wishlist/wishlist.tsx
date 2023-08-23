import { useState } from 'react';
import HeartIcon from '@/icons/heart';
const WishList = () => {
    const [border, setBorder] = useState<string>('#000000');
    const [background, setBackground] = useState<string>('#F2F3FB');

    const mouseEnterHandler = () => {
        setTimeout(() => {
            setBorder('#FB5F5F');
            setBackground('#FB5F5F');
        }, 200)
    }
    const mouseLeaveHandler = () => {
        setTimeout(() => {
            setBorder('#000000');
            setBackground('#F2F3FB');
        }, 200)
    }

    return(
        <>
            <button className="
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
                hover:border-[#EBECF1]
                duration-300 flex flex-wrap flex-row items-center justify-center gap-6" 
                type="button" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><HeartIcon border={border} background={background} /> Wishlist</button>
        </>
    );
}

export default WishList;