
const Newsletter = () => {
    return(
        <>
            <div className="container px-4 2xl:px-0">
                <form 
                    className="
                        w-full 
                        max-w-[1160px] 
                        rounded-[20px] 
                        mb-[37px] 
                        md:mb-[47px] 
                        lg:mb-[67px] 
                        px-[35px] 
                        md:px-[45px]
                        xl:px-[55px]
                        py-[40px] 
                        md:py-[50px] 
                        lg:py-[60px] 
                        bg-[#45108A] 
                        mx-auto 
                        px-4 
                        xl:px-0 
                        flex
                        flex-col 
                        flex-wrap 
                        md:flex-row
                        items-start
                        lg:items-center lg:justify-center" method="post">
                        <label className="font-bold text-[20px] sm:text-[24px] md:text-[30px] xl:text-[38px] text-white mb-4 lg:mb-0 mr-[16px] lg:mr-[25px]" htmlFor="newsletter">Subscribe to Newsletter</label>
                        <input className="rounded-[50px] lg:max-w-[365px] xl:max-w-[404px] w-full mb-4 lg:mb-0 pl-[20px] pr-3 pt-3 pb-4 lg:pl-[24px] lg:pr-4 lg:pt-[17px] lg:pb-[19px]" type="email" id="newsletter" placeholder="E-mail Address"/>
                        <button className="text-white bg-[#3D065F] hover:bg-[#10054D] font-medium rounded-[50px] w-[169px] ml-auto xl:ml-[15px] h-[40px] md:h-[50px] lg:h-[60px] text-[14px] md:text-[18px]" type="submit">Subscribe</button>
                </form>
            </div>
        </>
    );
}

export default Newsletter;