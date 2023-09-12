import CartPageComponent from "@/app/(frontend)/my-cart/components/cart/cart";

const MyCartPage = () => {
    return(
        <>
            <div className="container px-4 2xl:px-0 mb-[39px] lg:mb-[49px] xl:mb-[89px] relative z-0 top-0">
                <h1 className="text-[24px] lg:text-[30px] xl:text-[40px] font-medium mb-[19px] capitalize">Cart Page</h1>
                <CartPageComponent />
            </div>
        </>
    );
}

export default MyCartPage;