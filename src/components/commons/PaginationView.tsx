


interface Props {
    totalPages: number,
    currentPage: number,
    previousPage: number,
    nextPage: number,
    loadPageData: (pageNo: number) => any
}



export default function PaginationView({totalPages, currentPage, previousPage, nextPage, loadPageData } : Props) {
    var pagesArray = [];
    for (var i = 1; i <= totalPages; i++) {
        
        if (i == currentPage) {
            pagesArray.push(<li aria-current="page" key={i}>
            <a
                className="relative block rounded-full bg-primary-41697 px-3 py-1.5 text-sm font-medium text-primary-white transition-all duration-300"
                href="#!"
                >{i}
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
            </span>
            </a>
            </li>);
        } else {
            pagesArray.push(<li  key={i}>
                <a
                    className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#!"
                >{i}</a>
            </li>);
        }
        
    }

    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="list-style-none flex">
                    { previousPage && previousPage > 0 &&
                        <li>
                            <a onClick={loadPageData(previousPage)}
                                className="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                            >Previous</a>                    
                        </li>
                    }
                    {pagesArray}
                    { nextPage && nextPage > 0 &&
                        <li>
                            <a onClick={loadPageData(nextPage)}
                                className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                href="#!"
                            >Next</a>
                        </li>
                    }
                </ul>
            </nav>
        </>
    )
}