import Link from "next/link";
import classes from '@/components/admin/header/header.module.css';

import Logo from "@/icons/logo";
import LogoName from "@/icons/logoname";


const AdminHeader = () => {
    return(
        <>
            <header className={classes.header}>
                <div className='container'>
                    <div className='flex flex-col w-full items-center md:flex-row'>
                        <div className='flex flex-row mr-auto items-center md:flex-[0_0_20rem] w-full my-[10px] px-4 2xl:px-0'>
                            <Link className='flex items-center mr-auto' href="/">
                                <span className='flex-[0_0_60px] h-[60px]'>
                                    <Logo color="#fff"/>
                                </span>
                                <span className='ml-4 flex-[0_0_160px]'>
                                    <LogoName color="#fff"/>
                                </span> 
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default AdminHeader;