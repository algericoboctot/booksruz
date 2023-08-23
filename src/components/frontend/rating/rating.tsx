import StarIcon from '@/icons/star';
const Rating = () => {
    return(
        <>
            <div className="my-4 flex flex-col flex-wrap md:flex-row items-end">
                <div className="flex flex-row flex-wrap gap-2">
                    <StarIcon color="#FFB800" />
                    <StarIcon color="#FFB800" />
                    <StarIcon color="#FFB800" />
                    <StarIcon color="#FFB800" />
                    <StarIcon color="#FFB800" />
                </div>
                <div className="text-[#0F172A] text-base leading-[16px] ml-4">90 Reviews</div> 
            </div>
            
        </>
    );
}

export default Rating;