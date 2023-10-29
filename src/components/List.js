import React from 'react';
import {Pagination} from "./Pagination";
import {ListItems} from "./ListItems";
import {SearchPanel} from "./SearchPanel";

export const List = ({list}) => {
    /**
     * List 는 데이터만 받아오고 받아온 데이터를 가지고 조작한다.
     */

    return (
        <>
            <ListItems listItems={list}/>

        </>
    )
}
