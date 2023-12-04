import React, {useState} from "react";
import classNames from "classnames/bind";
import {Bars3Icon, ClockIcon, CubeTransparentIcon, XMarkIcon} from "@heroicons/react/20/solid";
import styled from "styled-components";
import {Link} from "react-router-dom";


const NavigationDiv = styled.nav`
  border-bottom: 1px solid rgb(0, 0, 0);
`;

export const Navbar = () => {


    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <NavigationDiv>
            <div className="flex h-30 justify-between">
                <div className={"flex items-center space-x-2 mx-4"}>
                    <div>
                        <Link to={"/stocks"} className="flex items-center py-5 px-2 text-gray-700">
                            <CubeTransparentIcon className="h-5 w-5 mr-2 text-blue-400"/>
                            <span className="font-bold">Home</span>
                        </Link>
                    </div>
                </div>
                <div className={"hidden md:flex items-center mx-4"}>
                    <a href="#" className="py-5 px-3">
                        Login
                    </a>
                    <a
                        href="#"
                        className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                    >
                        Signup
                    </a>
                </div>
                {/* mobile menu */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuToggle(!menuToggle)}>
                        {menuToggle ? (
                            <XMarkIcon className={"h-6 w-6 mx-4"}/>
                        ) : (
                            <Bars3Icon className={"h-6 w-6 mx-4"}/>
                        )}
                    </button>
                </div>
            </div>
            {/* mobile menu items */}
            <div className={classNames("md:hidden", {hidden: !menuToggle})}>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
                    Dashboard
                </a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
                    table
                </a>
            </div>
        </NavigationDiv>
    );
};
