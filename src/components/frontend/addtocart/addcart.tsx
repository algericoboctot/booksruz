import { ICartItem } from "@/interfaces/frontend/cart";
import CartContext from "@/store/frontend/cart/cartcontext";
import { FormEventHandler, useContext, useState} from "react";

const AddToCart = ({id, title, price } : {  id: string, title: string, price: number}) => {
    const [qty, setQty] = useState<number>(1);
    const cartCtx = useContext(CartContext);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQty(+e.target.value);
    }
    
    const addToCartHandler = (amount: number) => {
        const addedItem: ICartItem = {
            id: id,
            title: title,
            amount: amount,
            price: price
        }
        cartCtx.addItem(addedItem);
    };

    const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        addToCartHandler(qty);
        console.log();
    }
    return(
        <>
        <form className="ml-auto flex flex-row flex-wrap items-center gap-3" onSubmit={submitHandler} >
            <input className="w-[58px] h-[50px] border-[#1A2134] border-2 rounded-[8px] p-2" type="number" min="1" max="30"  onChange={inputChangeHandler} value={qty} />
            <button className="
                    bg-[#1A2134] 
                    rounded-[8px] 
                    border-[3px] 
                    border-[#1A2134] 
                    hover:border-[#616163] 
                    hover:ease-in 
                    duration-300 
                    text-[#F2F3FB] 
                    text-[14px] 
                    leading-[28px] 
                    w-[150px] 
                    h-[50px]" 
                    type="submit">Add To Cart</button>
        </form>
        </>
    );
}

export default AddToCart;