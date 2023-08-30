import Link from 'next/link';
import CartImage from "@/ui/placeholders/cartimage/cartimage";
import { FC, useEffect, useState } from 'react';
import { ICartAddRemoveItem } from '@/interfaces/frontend/cart';
import { usePathname } from 'next/navigation';

const CartItemStatus:FC<ICartAddRemoveItem> = (props) => {

  const {title, price, isbn, amount, slug, removeAll } = props;

  const [path, setPath ] = useState<string>();

  const pathname = usePathname();

  useEffect(() => {
      if ( pathname ) {
          setPath(`/books/${slug}`);
      }
  }, [path]);

  const intPrice = `$${price.toFixed(2)}`;

  return (
    <li className="flex flex-row flex-wrap pb-[10px]">
          <div className="mr-auto w-[65px] h-[80px] border-[#260448] border-[1px]">
            <Link href={`${path}`}>
              <CartImage isbn={isbn} imgSize='object-fill'/>
            </Link>
          </div>
          <div className="ml-auto flex-col flex-wrap w-[calc(100%-80px)]">
            <div className="flex flex-row flex-wrap items-start gap-2">
              <h4 className="mr-auto text-[20px]"><Link href={`${path}`}>{title}</Link></h4>
              <button className="ml-auto w-[20px] h-[20px] text-white bg-[#260448] leading-[20px]" onClick={removeAll}><span className="text-[16px]">&#120;</span></button>
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
  