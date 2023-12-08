import React, {useEffect, useState} from "react";
import {SearchPanel} from "../../components/SearchPanel";
import {Pagination} from "../../components/Pagination";
import {List} from "../../components/List";
import {Buttons} from "../../components/Buttons";
import {useNavigate} from "react-router-dom";

export const Articles = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState({});
    const [articles, setArticles] = useState([])
    let offset = 10;    // 리스트를 화면에서 몇개를 보여줄지 확인

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8090/api/articles?page=${currentPage - 1}&size=${offset}`).then(async (response) => {
            const data = await response.json();
            setData({...data});
            setArticles([...data.content])
        });
    }, [currentPage])

    const header = [


    ]

    return (
        <div className={"m-10 pr-10 pl-10"}>
            <SearchPanel/>
            <Buttons handleCreate={() => navigate("/articles/create")}/>
            <List list={articles}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} offset={offset} total={data.totalElements}/>
        </div>
    )
}