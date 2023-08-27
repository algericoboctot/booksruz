import { useState, useContext } from 'react';
import CartIcon from "@/icons/cart";
import CartContext from '@/store/frontend/cart/cartcontext';
import CartItemStatus from '@/components/frontend/cart-status/cartItem';
import { ICartItem } from '@/interfaces/frontend/cart';

const CartStatus = () => {
    const [hover, setHover] = useState<boolean>(false);
    const cartCtx = useContext(CartContext);

    console.log(cartCtx.items);
    
    const mouseInHandler = () => {
        setHover(true);
    }

    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id);
    };

    const mouseLeaveHanlder = () => {
        setHover(false);
    }
    return(
        <>
            <div className='relative'>
                <span onMouseEnter={mouseInHandler} onMouseLeave={mouseLeaveHanlder} className="cursor-pointer">
                    <CartIcon color="#260448" />
                </span>
                {
                    <div className='bg-white border-[#5c5b5b] border-[1px] rounded-md absolute w-[320px] right-0 p-5 z-50'>
                        <h4>Empty cart!</h4>
                        <ul>
                            {cartCtx.items.map((item) => (
                                <CartItemStatus 
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    amount={item.amount}
                                    price={item.price}
                                    removeItem={cartItemRemoveHandler.bind(null, item.id)}
                                />
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </>
    );
}
export default CartStatus;