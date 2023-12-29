import React, {useEffect, useState} from "react";
import {SearchPanel} from "../../components/SearchPanel";
import {Pagination} from "../../components/Pagination";
import {List} from "../../components/List";
import {Buttons} from "../../components/Buttons";
import {useNavigate} from "react-router-dom";
import {Server} from "../../api/MainService";


export const Articles = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState({});
    const [articles, setArticles] = useState([])
    let offset = 10;    // 리스트를 화면에서 몇개의 content를 보여주는가

    const navigate = useNavigate();

    const onLoad = async () => {
        const data = await Server.get(`api/articles?page=${currentPage - 1}&size=${offset}`);

        console.log(data)
        if (data) {
            setData({...data});
        }
        if (data.content) {
            setArticles([...data.content])
        }
    }

    useEffect(() => {
        onLoad()
    }, [currentPage]);

    const header = []

    return (
        <div className={"m-10 pr-10 pl-10"}>
            <SearchPanel/>
            <Buttons handleCreate={() => navigate("/articles/create")}/>
            <List list={articles} moveTo={`/articles`}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} offset={offset} total={data.totalElements}/>
        </div>
    )
}