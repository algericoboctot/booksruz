import WishListsListing from "./wishlists/wishlists";

const WishlistPage = () => {
    return(
        <> 
            <div className="container px-4 2xl:px-0 mb-[39px] lg:mb-[49px] xl:mb-[89px] relative z-0 top-0">
                <h1 className="text-[48px] text-[#0F172A] font-medium mb-[16px]">Wishlist</h1>
                <WishListsListing />
            </div>
        </>
    );
}

export default WishlistPage;