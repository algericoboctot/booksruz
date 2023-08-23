import classes from '@/components/admin/layouts/footer/footer.module.css';
import Link from 'next/link';

const AdminFooter = () => {
    return(
        <>
    <footer className={`${classes.footer} pt-[37px] md:pt-[47px] lg:pt-[67px] pb-[67px] md:pb-[77px] lg:pb-[97px] px-4 xl:px-0`}>
        <div className="container">
            <div className="flex flex-col flex-wrap sm:flex-row text-white sm:mx-[-16px] xl:mx-[0] xl:justify-between">
                <div className='mr-auto'>
                    <p>BOOKZRUS</p>
                </div>
                <div className='ml-auto'>
                    <p>Powered By: Jongbocs</p>
                </div>
            </div>
        </div>
    </footer>
        </>
    );
}

export default AdminFooter;