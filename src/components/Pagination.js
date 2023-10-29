import React from 'react';

export const Pagination = ({currentPage, setCurrentPage, offset, total}) => {

    /**
     * paging 컴포넌트에서 전달해야 할 정보
     *  1. prev, next
     *  2. page 넘버들
     *  3. 넘버를 클릭시 해당 리스트를 반환해야 함
     */



    const visualPageCount = 10;
    let endPage = Math.ceil((currentPage / 10.0)) * 10;
    let startPage = endPage - (offset - 1);
    let realEndPage = Math.ceil((total * 1.0) / offset);
    if (realEndPage < endPage) {
        endPage = realEndPage
    }

    const lastPagesCount = realEndPage % visualPageCount;
    const startPageAtLast = realEndPage - lastPagesCount + 1;

    let prev = startPage > 1;
    let next = endPage < realEndPage;

    const pageNumberList = () => {
        return Array.from({length: endPage}, (_, index) => index + 1);
    }

    console.log(total)
    console.log(pageNumberList())
    console.log(endPage)
    console.log(realEndPage)
    console.log(lastPagesCount)
    console.log(startPageAtLast)

    return (
        <div className={"md:flex gap-3 mt-5"}>
            {currentPage > visualPageCount ? (
                <button onClick={() => setCurrentPage(1)}>
                    First
                </button>
            ) : ''}
            {/*{prev ? (*/}
            {/*    <button onClick={setCurrentPage(prev => prev - 1)}>*/}
            {/*        ◀*/}
            {/*    </button>*/}
            {/*) : ''}*/}
            <ul className={"md:flex gap-3 cursor-pointer"}>
                {pageNumberList().map((item, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => setCurrentPage(item)}
                            className={currentPage === item ? "bg-blue" : "bg-amber-50"}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
            {/*{next ? (*/}
            {/*    <button onClick={setCurrentPage(prev => prev + 1)}>*/}
            {/*        ▶*/}
            {/*    </button>*/}
            {/*) : ''}*/}
            {currentPage < startPageAtLast ? (
                <button onClick={() => setCurrentPage(realEndPage)}>
                    Last
                </button>
            ) : ''}
            <span>{`${currentPage}/${realEndPage}`}</span>
        </div>
    )
}
