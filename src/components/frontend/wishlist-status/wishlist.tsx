import HeartIcon from "@/icons/heart";
import { useState } from "react";

const WishlistStatus = () => {
    const [hover, setHover] = useState<boolean>(false);

    const mouseInHandler = () => {
        setHover(true);
    }

    const mouseLeaveHanlder = () => {
        setHover(false);
    }
    return(
        <>
            <div className='relative'>
                <span onMouseEnter={mouseInHandler} onMouseLeave={mouseLeaveHanlder} className="cursor-pointer">
                    <HeartIcon border="#FB5F5F" background="transparent" />
                </span>
                {hover &&
                    <div onMouseEnter={mouseInHandler} onMouseLeave={mouseLeaveHanlder} className='bg-white border-[#5c5b5b] border-[1px] rounded-md absolute w-[320px] right-0 p-5 top-5'>
                        <h4>You have no favorite books!</h4>
                    </div>
                }
            </div>
        </>
    );
}

export default WishlistStatus;