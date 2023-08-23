import Logo from "@/icons/logo";
import LogoName from "@/icons/logoname";
import Image from "next/image";
import classes from '@/components/frontend/layouts/banner/banner.module.css';

const Banner = () => {
    return(
        <>
            <div className={`${classes.banner}`}>
                <div className="container px-4 2xl:px-0 flex flex-row">
                    <div className="max-w-[655px] flex flex-row lg:flex-col items-center lg:items-start pt-[61px] pb-[70px] lg:pt-[122px] lg:pb-[141px]">
                        <div className="hidden lg:flex items-center pb-[45px] lg:pb-[85px]">
                            <span className='w-[60px] h-[60px] lg:w-[96px] lg:h-[96px]'>
                                <Logo color="#fff"/>
                            </span>
                            <span className='ml-4'>
                                <LogoName color="#fff"/>
                            </span> 
                        </div>
                        <div className="text-[#fff]">
                            <h1 className="text-[35px] leading-[39px] lg:text-[55px] lg:leading-[59px] font-bold pb-[16px]">
                                Get lost in a great book and explore a new world!
                            </h1>
                            <p className="text-[20px] lg:text-[24px] leading-[30px] lg:leading-[35px]">
                                Looking for an escape from reality? Our books offer a gateway to new and exciting worlds filled with adventure, mystery, and wonder
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex w-full lg:justify-end items-end">
                        <Image width={657} height={620} src="/person-reading.svg" alt="Person Reading"/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Banner;