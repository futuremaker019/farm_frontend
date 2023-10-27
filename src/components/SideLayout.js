import React from 'react';
import {SideBar} from "./SideBar";
import {Navbar} from "./NavBar";

export const SideLayout = (props) => {
    return (
        <>
            <div className={"w-full p-0"}>
                <SideBar>{props.children}</SideBar>
            </div>
        </>
    )
}