import React, {useEffect, useState} from "react";
import {listDummy} from "../../data/dummy";
import {SearchPanel} from "../../components/SearchPanel";
import {Pagination} from "../../components/Pagination";
import {List} from "../../components/List";

export const Articles = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState({});
    const [articles, setArticles] = useState([])
    let offset = 10;    // 리스트를 화면에서 몇개를 보여줄지 확인
    let total = listDummy.length;

    useEffect(() => {
        fetch(`http://localhost:8090/api/articles`).then(async (response) => {
            const data = await response.json();
            setData({...data});
            setArticles([...data.content])
        });
    }, [])

    return (
        <div className={"m-10"}>
            {/*<SearchPanel/>*/}
            <List list={articles}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} offset={offset} total={data.totalElements}/>
        </div>
    )
}