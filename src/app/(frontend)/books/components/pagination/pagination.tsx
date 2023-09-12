import Link from "next/link";
const Pagination = ({ page, totalPages, handlePagination } : { page: number, totalPages: number, handlePagination: () => void}) => {
    return(
        <>
            <div className="container px-4 2xl:px-0 py-x pb-[34px] lg:pb-[44px] xl:pb-[64px]">
                <div className="flex justify-center my-4">
                    {page > 1 && (
                        <Link onClick={handlePagination} href={`/books?page=${page - 1}`} scroll={false}>
                            <span className="mx-2 px-4 py-2 rounded-md bg-gray-300 text-gray-800">
                                Previous
                            </span>
                        </Link>
                    )}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Link onClick={handlePagination} key={index} href={`/books?page=${index + 1}`} scroll={false}>
                            <span className={`mx-2 px-4 py-2 rounded-md ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
                                {index + 1}
                            </span>
                        </Link>
                    ))}
                    {page < totalPages && (
                        <Link onClick={handlePagination} href={`/books?page=${page + 1}`} scroll={false}>
                            <span className="mx-2 px-4 py-2 rounded-md bg-gray-300 text-gray-800">
                                Next
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}

export default Pagination;