import { ChangeEvent } from "react";
import classes from './sorting.module.css';

const Sorting = ({sortHandler, sortedValue } : {sortHandler: any, sortedValue: string}) => {

    const sortingHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        sortHandler(e);
    }

    return(
        <>
            <div className="ml-auto flex items-center justify-start">
                <label className="text-[18px] font-medium pr-4" htmlFor="dropdownsearch">Sort by:</label>
                <div className={`${classes['select-dropdown']}`}>
                    <select className="text-white pl-4 pr-5 py-3" onChange={sortingHandler} id="dropdownsearch" value={sortedValue}>
                        <option key="title" value="title">Title</option>
                        <option key="author" value="author">Author</option>
                        <option key="publication_date" value="publication_date">Publication Date</option>
                        <option key="ascending" value="ascending">Ascending</option>
                        <option key="descending" value="descending">Descending</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default Sorting;