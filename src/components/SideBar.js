import React, {useState} from "react";
import {
    ArchiveBoxArrowDownIcon, CalendarIcon,
    Cog8ToothIcon,
    FolderMinusIcon,
    PresentationChartBarIcon, SunIcon,
    TableCellsIcon
} from "@heroicons/react/20/solid";
import {Navbar} from "./NavBar";

export const SideBar = (props) => {

    const bgColor = "bg-blue-500";
    const [menuToggle, setMenuToggle] = useState(true);

    return (
        <div>

            <main className="flex bg-gray-100">

                {/* SideBar */}
                <aside className={`${menuToggle ? "hidden md:block" : "hidden"} w-64 ${bgColor}`}>
                    <div className="p-6">
                        <a
                            href=""
                            className="flex items-center text-white text-3xl font-semibold hover:text-gray-300"
                        >
                            <Cog8ToothIcon className={`mr-3 h-6 w-6 ${props.class}`}/>
                            Admin
                        </a>
                    </div>
                    <nav className="block text-white text-base font-semibold pt-3">
                        <a
                            href=""
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                        >
                            <PresentationChartBarIcon className={`mr-3 h-6 w-6 ${props.class}`}/>
                            Dashboard
                        </a>
                        <a
                            href=""
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                        >
                            <TableCellsIcon className={`mr-3 h-6 w-6 ${props.class}`}/>
                            Tables
                        </a>
                        <a
                            href=""
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                        >
                            <FolderMinusIcon className={`mr-3 h-6 w-6 ${props.class}`}/>
                            Forms
                        </a>
                        <a
                            href=""
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                        >
                            <ArchiveBoxArrowDownIcon className={`mr-3 h-6 w-6 ${props.class}`} />
                            Tabbed Content
                        </a>
                        <a
                            href=""
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                        >
                            <CalendarIcon className={`mr-3 h-6 w-6 ${props.class}`} />
                            Calendar
                        </a>
                        <a
                            href=""
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                        >
                            <SunIcon className={`mr-3 h-6 w-6 ${props.class}`} />
                            Support
                        </a>
                    </nav>
                </aside>

                {/* Mobile Header & Nav */}
                <div className="w-full flex flex-col h-screen overflow-y-hidden">
                    <header
                        className={`w-full py-5 px-6 ${
                            menuToggle ? "hidden" : "block"
                        } md:hidden`}
                    >
                        {/* Dropdown Nav */}
                        <nav className="text-white text-base font-semibold bg-gray-500 ">
                            <a
                                href=""
                                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                            >
                                <PresentationChartBarIcon className={`mr-3 h-6 w-6 ${props.class}`}/>
                                Dashboard
                            </a>
                            <a
                                href=""
                                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                            >
                                <TableCellsIcon className="mr-3"/>
                                Tables
                            </a>
                            <a
                                href=""
                                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 "
                            >
                                <FolderMinusIcon className="mr-3"/>
                                Forms
                            </a>
                            <a
                                href=""
                                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                            >
                                <ArchiveBoxArrowDownIcon className="mr-3"/>
                                Tabbed Content
                            </a>
                            <a
                                href=""
                                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                            >
                                <CalendarIcon className="mr-3"/>
                                Calendar
                            </a>
                            <a
                                href=""
                                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
                            >
                                <SunIcon className="mr-3"/>
                                Support
                            </a>
                        </nav>
                    </header>

                    {/* props.children position here */}
                    <slot>{props.children}</slot>
                </div>
            </main>
        </div>
    )
}