import { useState } from 'react';
import HeartIcon from '@/icons/heart';
import classes from '@/components/frontend/wishlist/wishlist.module.css';
const WishList = () => {
    
    const [border, setBorder] = useState<string>('#000000');
    const [background, setBackground] = useState<string>('#F2F3FB');
    const [active, setActive] = useState<boolean>(false);
    const [btnBorder, setBtnBorder] = useState<string>('#F2F3FB');


    const clickHandler = () => {
        setActive(prev => !prev);
        if (!active) {
            setBorder('#FB5F5F');
            setBackground('#F2F3FB');
            setBtnBorder('#EBECF1');
        } else {
            setBorder('#000000');
            setBackground('#F2F3FB');
            setBtnBorder('#F2F3FB');
        }
    };

    return(
        <>
            <button className={`
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
                style={{border: `3px solid ${btnBorder}`}}
                type="button" onClick={clickHandler}><HeartIcon border={border} background={background} />Wishlist</button>
        </>
    );
}

export default WishList;