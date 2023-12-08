import React from 'react';

export const Pagination = ({currentPage, setCurrentPage, offset, total}) => {

    const visualPageCount = 10;
    let endPage = Math.ceil((currentPage / 10.0)) * 10;
    let startPage = endPage - (offset - 1);
    let realEndPage = Math.ceil((total * 1.0) / offset);
    if (realEndPage < endPage) {
        endPage = realEndPage
    }

    const lastPagesCount = realEndPage % visualPageCount;
    const startPageAtLast = realEndPage - lastPagesCount + 1;

    const pageNumberList = () => Array.from({length: realEndPage}, (_, index) => index + 1);
    const getPages = () => pageNumberList().slice(startPage - 1, endPage);
    const moveToFirst = () => setCurrentPage(1);
    const moveToLast = () => setCurrentPage(realEndPage);
    const moveToPrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    }
    const moveToNext = () => {
        if (realEndPage <= currentPage) return;
        setCurrentPage(prev => prev + 1);
    }

    console.log(currentPage)

    return (
        <div className={"md:flex gap-3 mt-10 justify-center"}>
            <ul className={"list-style-none flex"}>
                {currentPage > visualPageCount ? (
                    <li className={"cursor-pointer relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-700 dark:hover:text-white"}
                        onClick={moveToFirst}>First</li>) : ''}
                <li
                    onClick={moveToPrev}
                    className={"cursor-pointer relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-700 dark:hover:text-white"}
                >
                    Previous
                </li>
                {getPages().map((item, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => setCurrentPage(item)}
                            className={currentPage === item
                                ? "cursor-pointer dark:bg-neutral-700 dark:text-white relative block rounded px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300"
                                : "cursor-pointer relative block rounded px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"}
                        >
                            {item}
                        </li>
                    )
                })}
                <li
                    onClick={moveToNext}
                    className={"cursor-pointer relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"}
                >
                    Next
                </li>
                {currentPage < startPageAtLast ? (
                    <li
                        className={"cursor-pointer relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"}
                        onClick={moveToLast}
                    >Last</li>) : ''}
            </ul>

            <span
                className={"cursor-pointer relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300"}
            >{`${currentPage}/${realEndPage}`}</span>
        </div>
    )
}
