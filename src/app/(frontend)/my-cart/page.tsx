import CartPageComponent from "@/app/(frontend)/my-cart/cart/cart";

const MyCartPage = () => {
    return(
        <>
            <div className="container px-4 2xl:px-0 mb-[39px] lg:mb-[49px] xl:mb-[89px] relative z-0 top-0">
                <h1>Cart Page</h1>
                <CartPageComponent />
            </div>
        </>
    );
}

export default MyCartPage;