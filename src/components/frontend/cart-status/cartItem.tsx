import { FC } from "react";

const CartItemStatus = (
        {id, title, price, amount, removeItem } : 
        {   id: string, 
            title: string, 
            price: number, 
            amount: number,
            removeItem: () => void
        }) => {
    const intPrice = `$${price.toFixed(2)}`;

    return (
      <li id={id}>
        <div>
            <h2>{title}</h2>
            <div>
                <span>{intPrice}</span>
                <span>x{amount}</span>
            </div>
            <div>
                <button onClick={removeItem}>−</button>
            </div>
        </div>
      </li>
    );
  };
  
  export default CartItemStatus;
  