import { useState } from 'react';
import CartIcon from "@/icons/cart";

const CartStatus = () => {
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
                    <CartIcon color="#260448" />
                </span>
                {hover &&
                    <div onMouseEnter={mouseInHandler} onMouseLeave={mouseLeaveHanlder} className='bg-white border-[#5c5b5b] border-[1px] rounded-md absolute w-[320px] right-0 p-5'>
                        <h4>Empty cart!</h4>
                    </div>
                }
            </div>
        </>
    );
}
export default CartStatus;