import Link from 'next/link';
import { useState, useContext } from 'react';
import CartIcon from "@/icons/cart";
import CartContext from '@/store/frontend/cart/cartcontext';
import CartItemStatus from '@/components/frontend/cart/cartItem';

const CartStatus = () => {
    const cartCtx = useContext(CartContext);
    const [hover, setHover] = useState<boolean>(false);
    const items = cartCtx.items.length;
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
                                  

    const mouseInHandler = () => {
        setHover(true);
    }

    const cartItemRemoveAllHandler = async (id: string) => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        cartCtx.removeAll(id);
        setIsLoading(false);
    };

    const mouseLeaveHandler = () => {
        setHover(false);
    }

    return (
        <div className='relative'>
            <div onMouseEnter={mouseInHandler} onMouseLeave={mouseLeaveHandler} className='relative cursor-pointer '>
                <span className="relative">
                    <CartIcon width="35px" height="35px" color="#260448" />
                </span>
                {items > 0 && (
                    <span className='absolute left-[18px] top-0 text-white bg-[#FB5F5F] w-[20px] h-[20px] flex items-center justify-center text-[13px] rounded-full'>
                        {items}
                    </span>
                )}
            </div>
            {hover && (
                <div onMouseEnter={mouseInHandler} onMouseLeave={mouseLeaveHandler} className='absolute w-[400px] xl:w-[420px] pt-6 top-[20px] translate-x-[-45%] md:translate-x-0 ml-[45%] md:ml-0 md:right-0'>
                    <div className='bg-white border-[#5c5b5b] border-[1px] rounded-md w-full p-5'>
                        <h4 className='mb-4 text-[20px] font-medium border-[#e0dfdf] border-b-[1px]'>Your current items in cart</h4>
                        { (items > 0 ) ? (
                        <>
                            <ul className='border-[#e0dfdf] border-b-[1px] py-[15px] mb-4'>
                                {cartCtx.items.map((item) => (
                                    <CartItemStatus
                                        key={item.id}
                                        {...item}
                                        removeAll={cartItemRemoveAllHandler.bind(null, item.id)}
                                    />
                                ))}
                            </ul>
                            <div className='flex flex-wrap flex-row mb-5'>
                                <span className='mr-auto font-medium text-[18px]'>Subtotal:&nbsp;</span>
                                <span className='ml-auto font-medium text-[18px]'>{totalAmount}</span>
                            </div>
                            <div className='flex flex-wrap justify-center flex-row gap-4'>
                                <Link className="
                                        bg-[#260448] 
                                        rounded-[8px] 
                                        w-[120px] 
                                        h-[40px] 
                                        border-[2px] 
                                        border-[#260448] 
                                        hover:bg-white 
                                        hover:text-[#260448] 
                                        transition: 
                                        text-center 
                                        text-[14px] 
                                        leading-[36px] 
                                        text-white 
                                        font-medium
                                        transition 
                                        duration-300
                                        " href="/my-cart">View Cart</Link>
                                <Link className=" bg-[#ffffff] 
                                        rounded-[8px] 
                                        w-[120px] 
                                        h-[40px] 
                                        border-[2px] 
                                        border-[#260448] 
                                        hover:bg-[#260448] 
                                        hover:text-white 
                                        transition: 
                                        text-center 
                                        text-[14px] 
                                        leading-[36px] 
                                        text-[#260448] 
                                        font-medium
                                        transition 
                                        duration-300" href="/checkout">Checkout</Link>
                            </div>
                        </>) : <p>Empty cart!</p>}
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartStatus;
