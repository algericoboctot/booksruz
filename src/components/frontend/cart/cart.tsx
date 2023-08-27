import Link from 'next/link';
import { useState, useContext } from 'react';
import CartIcon from "@/icons/cart";
import CartContext from '@/store/frontend/cart/cartcontext';
import CartItemStatus from '@/components/frontend/cart/cartItem';

const CartStatus = () => {
    const cartCtx = useContext(CartContext);
    const [hover, setHover] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const items = cartCtx.items.length;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    
    const mouseInHandler = () => {
        setHover(true);
    }

    const cartItemRemoveHandler = async (id: string) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        cartCtx.removeItem(id);
        setIsLoading(false);
    };

    const removeItemAllHandler = async () => {
        cartCtx.clearCart();
    }

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
                <div onMouseEnter={mouseInHandler} onMouseLeave={mouseLeaveHandler} className='absolute w-[420px] pt-6 top-[20px] right-0'>
                    <div className='bg-white border-[#5c5b5b] border-[1px] rounded-md w-full p-5'>
                        <h4 className='mb-4 text-[20px] font-medium border-[#e0dfdf] border-b-[1px]'>Your current items in cart</h4>
                        { (items > 0 ) ? (
                        <>
                            <ul className='border-[#e0dfdf] border-b-[1px] py-[15px] mb-4'>
                                {cartCtx.items.map((item) => (
                                    <CartItemStatus
                                        key={item.id}
                                        title={item.title}
                                        slug={item.slug}
                                        amount={item.amount}
                                        isbn={item.isbn}
                                        price={item.price}
                                        removeItem={cartItemRemoveHandler.bind(null, item.id)}
                                    />
                                ))}
                            </ul>
                            <div className='flex flex-wrap flex-row'>
                                <span className='mr-auto font-medium text-[18px]'>Subtotal:&nbsp;</span>
                                <span className='ml-auto font-medium text-[18px]'>{totalAmount}</span>
                            </div>
                            <div className='flex flex-wrap justify-center flex-row'>
                                <Link className="bg-[#260448]" href="/my-cart">View Cart</Link>
                                <Link className="" href="/checkout">Checkout</Link>
                            </div>
                        </>) : <p>Empty cart!</p>}
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartStatus;
