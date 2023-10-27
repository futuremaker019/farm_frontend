import React, {useState} from "react";
import {Navbar} from "../../components/NavBar";
import {SideLayout} from "../../components/SideLayout";
import {CubeTransparentIcon} from "@heroicons/react/20/solid";
import classNames from "classnames/bind";

export const Main = () => {

    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className={"flex h-screen bg-green-300"}>
            <nav className="bg-gray-300">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-between h-16">
                        <div className={"flex space-x-4"}>
                            <div>
                                <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                                    <CubeTransparentIcon className="h-5 w-5 mr-2 text-blue-400"/>
                                    <span className="font-bold">Home</span>
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <a
                                    href="#"
                                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                                >
                                    Pricing
                                </a>
                            </div>
                        </div>
                        <div className={"hidden md:flex items-center space-x-1"}>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu items */}
                <div className={classNames("md:hidden", { hidden: !menuToggle })}>
                    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
                        Pricing
                    </a>
                    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
                        Features
                    </a>
                </div>
            </nav>
            <SideLayout/>
                {/* content goes here */}
                <div className="py-32 text-center">
                    <div className="text-4xl font-extrabold">Hello World</div>
                </div>
        </div>
    )
}