import WishContext from "@/store/frontend/wishlist/wishcontext";
import Link from "next/link";
import { useContext } from "react";

const Navigation = () => {
    const wishCtx = useContext(WishContext);
    const items = wishCtx.totalWished;
    return(
        <>
            <nav className="flex justify-center">
                <ul className="block md:flex md:flex-row md:items-center">
                    <li className="md:mx-[16px] my-[10px]">
                        <Link className="font-bold text-[#260448] hover:text-[#7C00FF] ease-out duration-500" href="/">
                            Home
                        </Link>
                    </li>
                    <li className="md:mx-[16px] my-[10px] md:my-0">
                        <Link className="font-bold text-[#260448] hover:text-[#7C00FF] ease-out duration-500" href="/books">
                            Books
                        </Link>
                    </li>
                    { items > 0 && (
                            <li className="md:mx-[16px] my-[10px] md:my-0">
                                <Link className="font-bold text-[#260448] hover:text-[#7C00FF] ease-out duration-500" href="/wishlist">
                                    Wishlist
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </>
    );
}

export default Navigation;