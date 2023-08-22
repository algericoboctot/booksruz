import classes from '@/ui/placeholders/book-image-loader/bookplaceholder.module.css';
const BookImageLoader = () => {
    return (
        <>
            <div className={`${classes['book__placeholder']} w-full h-full`}>
                <div className={`${classes['book__animatedbg']} w-full h-full`}>

                </div>
            </div>
        </>
    );
}

export default BookImageLoader;