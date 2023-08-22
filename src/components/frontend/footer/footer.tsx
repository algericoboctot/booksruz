import classes from '@/components/frontend/footer/footer.module.css';
import Link from "next/link";
import GoogleIcon from '@/icons/google';
import FacebookIcon from '@/icons/facebook';
import TwitterIcon from '@/icons/twitter';
import LinkedinIcon from '@/icons/linkedin';
import Logo from "@/icons/logo";
const MainFooter = () => {
    return (
        <>
            <footer className={`${classes.footer} pt-[37px] md:pt-[47px] lg:pt-[67px] pb-[67px] md:pb-[77px] lg:pb-[97px] px-4 xl:px-0`}>
                <div className="container">
                    <div className="flex flex-col flex-wrap sm:flex-row text-white sm:mx-[-16px] xl:mx-[0] xl:justify-between">
                        <div className='mb-5 lg:mb-0 sm:px-4 xl:px-0 sm:w-1/2 sm:flex-[0_0_50%] lg:w-1/4 lg:flex-[0_0_25%] xl:w-full xl:flex-[0_0_100%] xl:max-w-[393px] sm:order-1'>
                            <span className='block h-[115px] w-[115px] mb-[42px]'>
                                <Logo color="#ffffff"/>
                            </span>
                            <p className='text-[20px] lg:text-[24px] leading-[30px] lg:leading-[34px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.
                            </p>
                        </div>
                        <div className='mb-5 lg:mb-0 sm:px-4 xl:px-0 sm:w-1/2 sm:flex-[0_0_50%] lg:w-1/4 lg:flex-[0_0_25%] xl:w-[20%] xl:flex-[0_0_20%] sm:order-3 lg:order-2'>
                            <h5 className='text-[20px] md:text-[24px] mb-[10px] font-bold lg:mb-[32px]'>Resources</h5>
                            <ul className={`${classes.list}`}>
                                <li>
                                    <Link href="#">Home</Link>
                                </li>
                                <li>
                                    <Link href="#">Blog</Link>
                                </li>
                                <li>
                                    <Link href="#">Shipping &amp; Delivery</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy &amp; Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Terms &amp; Condition</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='mb-5 lg:mb-0 sm:px-4 xl:px-0 sm:w-1/2 sm:flex-[0_0_50%] lg:w-1/4 lg:flex-[0_0_25%] xl:w-[20%] xl:flex-[0_0_20%] sm:order-4 lg:order-3'>
                            <h5 className='text-[20px] md:text-[24px] mb-[10px] font-bold lg:mb-[32px]'>Company</h5>
                            <ul className={`${classes.list}`}>
                                <li>
                                    <Link href="#">Careers</Link>
                                </li>
                                <li>
                                    <Link href="#">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Store Finder</Link>
                                </li>
                                <li>
                                    <Link href="#">Testimonial</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='mb-5 lg:mb-0 sm:px-4 xl:px-0 sm:w-1/2 sm:flex-[0_0_50%] lg:w-1/4 lg:flex-[0_0_25%] xl:w-[20%] xl:flex-[0_0_20%] sm:order-2 lg:order-4 sm:items-start sm:flex sm:flex-col sm:justify-start'>
                            <h5 className='text-[20px] md:text-[24px] mb-[10px] font-bold lg:mb-[32px]'>Social Media</h5>
                            <div className={`flex flex-row flex-wrap items-center ${classes['social-media']}`}>
                                <Link title="Google" href="#"><GoogleIcon color="#ffffff"/></Link>
                                <Link title="Facebook" href="#"><FacebookIcon color="#ffffff" /></Link>
                                <Link title="Twitter" href="#"><TwitterIcon color="#ffffff" /></Link>
                                <Link title="Linkedin" href="#"><LinkedinIcon color="#ffffff" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default MainFooter;