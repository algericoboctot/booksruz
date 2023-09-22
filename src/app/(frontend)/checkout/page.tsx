import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import CheckOutInfo from "./components/checkoutinfo";

const CheckoutPage = async () => {
    const session = await getServerSession(options);

    console.log(session);
    return(
        <>
            <div className="container px-4 2xl:px-0 mb-[39px] lg:mb-[49px] xl:mb-[89px] relative z-0 top-0">
                { session ? (<CheckOutInfo />) : (<h1>You shall not pass!</h1>) }
            </div>
        </>
    );
}

export default CheckoutPage;