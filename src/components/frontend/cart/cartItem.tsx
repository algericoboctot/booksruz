import CartIMage from "./cartimage/cartimage";

const CartItemStatus = (
      {title, price, isbn, amount, removeItem } : 
      {
          isbn: string,
          price: number;
          title: string, 
          amount: number,
          removeItem: () => void
      }) => {
  const intPrice = `$${price.toFixed(2)}`;

  return (
    <li className="flex flex-row flex-wrap pb-[10px]">
          <div className="mr-auto w-[65px] h-[50px]">
            <CartIMage isbn={isbn} imgSize='object-fill'/>
          </div>
          <div className="ml-auto flex-col flex-wrap w-[calc(100%-80px)]">
            <div className="flex flex-row flex-wrap items-start">
              <h4 className="mr-auto text-[20px]">{title}</h4>
              <button className="ml-auto" onClick={removeItem}><span className="text-">x</span></button>
            </div>
            <div className="flex flex-row flex-wrap">
                <span className="mr-auto">Quantity: {amount}</span>
                <span className="ml-auto">Item Price: {intPrice}</span>
            </div>
          </div>
    </li>
  );
};
  
  export default CartItemStatus;
  