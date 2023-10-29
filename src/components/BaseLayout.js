import React from "react";
import {Navbar} from "./NavBar";
import {SideBar} from "./SideBar";
import {Outlet} from "react-router-dom";

export const BaseLayout = () => {
    return (
        <div className={"flex h-screen"}>
            <div className={"flex-1 flex flex-col overflow-hidden"}>
                <Navbar />
                <div className={"flex h-full"}>
                    <SideBar />
                    <div className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto m-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}