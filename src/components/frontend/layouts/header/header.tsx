'use client';

import {useState} from 'react';
import Logo from '@/icons/logo';
import LogoName from '@/icons/logoname';
import Link from 'next/link';
import MainNavigation from '@/components/frontend/layouts/navigation/navigation';
import classes from '@/components/frontend/layouts/header/header.module.css';
import CartStatus from '@/components/frontend/cart/cart';
import Wishlists from '@/components/frontend/wishlist/wishlist';
const MainHeader = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const mobileMenuHandler = () => {
        if (window.matchMedia("(max-width: 767px)").matches) {
            setMobileMenu(!mobileMenu);
        } 
    }
    return(
        <>
            <header className='relative z-20'>
                <div className='container'>
                    <div className='flex flex-col w-full items-center md:flex-row'>
                        <div className='flex flex-row mr-auto items-center md:flex-[0_0_20rem] w-full my-[10px] px-4 2xl:px-0'>
                            <Link className='flex items-center mr-auto' href="/">
                                <span className='flex-[0_0_60px] h-[60px]'>
                                    <Logo color="#260448"/>
                                </span>
                                <span className='ml-4 flex-[0_0_160px]'>
                                    <LogoName color="#260448"/>
                                </span> 
                            </Link>
                            <div className="ml-auto md:hidden flex items-center">
                                <button onClick={mobileMenuHandler} className='text-[0]' type="button">
                                    Menu
                                    {mobileMenu ?  
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" className='w-[30px] h-[30px] fill-[#000]'>
                                            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
                                        </svg> :             
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" className='w-[30px] h-[30px] fill-[#000]'>
                                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/>
                                        </svg>
                                    }
                                </button>
                            </div>
                        </div>
                        <div className={`${classes['main-navigation']} ${mobileMenu ? classes.open : classes.hidden} md:mx-auto w-full md:w-auto md:visible md:flex xl:px-0`}>
                            <MainNavigation />
                        </div>
                        <div className='md:ml-auto flex flex-row flex-wrap items-center gap-3 relative'>
                            <CartStatus />
                            <Wishlists />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default MainHeader;