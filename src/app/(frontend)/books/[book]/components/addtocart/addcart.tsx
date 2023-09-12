import { ICartItem } from "@/interfaces/frontend/cart";
import CartContext from "@/store/frontend/cart/cartcontext";
import { FC, FormEventHandler, useContext, useState} from "react";

const AddToCart: FC<ICartItem> = ({id, title, slug, price, isbn, amount}) => {
    const cartCtx = useContext(CartContext);
    const [qty, setQty] = useState<number>(amount);
    const [borderClr, setBorderClr] = useState<string>('');
    const [errorQty, setErrorQty] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQty(+e.target.value);
    }
    
    const addToCartHandler = async (amount: number) => {

        const addedItem: ICartItem = {
            id: id,
            slug: slug,
            isbn: isbn,
            title: title,
            amount: amount,
            price: price,
            itemTotalPrice: amount * price
        }
        
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        cartCtx.addItemQty(addedItem);
        setIsLoading(false);
    };

    const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (qty > 0) {
            await addToCartHandler(qty);
            setErrorQty('');
            setBorderClr('#1A2134');
        } else {
            setBorderClr('#FB5F5F');
            setErrorQty(`Add at least 1 quantity`);
            return;
        }
        
    }
    return(
        <>
        <form className="ml-auto" onSubmit={submitHandler} >
            <div className="mb-4 flex flex-row flex-wrap items-center gap-3">
                <div>
                    <label htmlFor="qty">Qty: </label>
                    <input id="qty" style={{borderColor: borderClr}} className={`w-[58px] h-[50px] border-2 rounded-[8px] p-2 text-center`} type="number" min="0" max="40" autoComplete="off" onChange={inputChangeHandler} value={qty} />
                </div>
                <button style={{backgroundColor: `${isLoading ? '#cacccf' : '#1A2134'}`, borderColor: `${isLoading ? '#cacccf' : '#1A2134'}`}} className="
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
                        type="submit" disabled={isLoading}>{isLoading ? 'Adding...' : 'Add To Cart'}</button>
            </div>
            <div className="text-right">
                <span>{errorQty}</span>
            </div>
        </form>
        </>
    );
}

export default AddToCart;