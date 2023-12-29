import React from "react";
import {
    ArchiveBoxArrowDownIcon,
    CalendarIcon,
    Cog8ToothIcon,
    FolderMinusIcon,
    PresentationChartBarIcon,
    SunIcon,
    TableCellsIcon
} from "@heroicons/react/20/solid";
import styled from "styled-components";
import {Link} from "react-router-dom";

const SidebarMain = styled.main`
  display: flex;
  border-right: 1px solid rgb(0, 0, 0);
`;

export const SideBar = (props) => {
    return (
        <SidebarMain>
            <aside className="hidden md:block w-60">
                <div className="p-6">
                    <a
                        href="#"
                        className="flex items-center font-semibold hover:text-gray-300"
                    >
                        <Cog8ToothIcon className={`mr-3 h-6 w-6`}/>
                        Admin
                    </a>
                </div>
                <nav className="block text-white text-base font-semibold pt-3">
                    <Link
                        to={"/articles"}
                        className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6"
                    >
                        <TableCellsIcon className={`mr-3 h-6 w-6`}/>
                        게시판
                    </Link>
                    <Link
                        to={"/assets"}
                        className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6"
                    >
                        <FolderMinusIcon className={`mr-3 h-6 w-6`}/>
                        자산
                    </Link>
                    <Link
                        to={"/settings"}
                        className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6"
                    >
                        <ArchiveBoxArrowDownIcon className={`mr-3 h-6 w-6`}/>
                        환경설정
                    </Link>
                    <Link
                        to={"/stocks/upload"}
                        className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6"
                    >
                        <PresentationChartBarIcon className={`mr-3 h-6 w-6`}/>
                        데이터 업로드
                    </Link>
                    <a
                        href="#"
                        className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6"
                    >
                        <CalendarIcon className={`mr-3 h-6 w-6`}/>
                        Calendar
                    </a>
                    <a
                        href="#"
                        className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6"
                    >
                        <SunIcon className={`mr-3 h-6 w-6`}/>
                        Support
                    </a>
                </nav>
            </aside>
        </SidebarMain>
    )
}