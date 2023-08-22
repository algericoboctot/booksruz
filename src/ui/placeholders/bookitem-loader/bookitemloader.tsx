import classes from '@/ui/placeholders/book-image-loader/bookplaceholder.module.css';
const BookItemLoader = () => {
    return (
        <>
            <div className='w-full flex flex-col sm:w-[50%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] lg:w-[33.33%] xl:flex-[0_0_25%] xl:w-[25%] mb-[40px] lg:mb-[67px] xl:mb-[107px] sm:px-4 h-[479px]'>
                <div className={`${classes['book__placeholder']} w-full h-full mb-[19px]`}>
                    <div className={`${classes['book__animatedbg']} w-full h-full`}>

                    </div>
                </div>
                <div className={`${classes['book__animatedbg']} h-[45px] w-full`}>
                </div>
            </div>
        </>
    );
}

export default BookItemLoader;