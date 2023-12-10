import React, {useState} from "react";
import {listDummy} from "../../utils/dummy";
import {List} from "../../components/List";
import {Pagination} from "../../components/Pagination";
import {SearchPanel} from "../../components/SearchPanel";

export const Stocks = () => {

    const [currentPage, setCurrentPage] = useState(1);
    let offset = 10;    // 리스트를 화면에서 몇개를 보여줄지 확인
    let total = listDummy.length;

    return (
        <div className={"m-10"}>
            <SearchPanel/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} offset={offset} total={total}/>
            <List list={listDummy}/>
        </div>
    )
}