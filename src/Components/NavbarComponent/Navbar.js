import React, { useState } from "react";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="w-full antialiased h-16 flex justify-center items-center">
            <div className="nav-container  flex justify-between items-center h-max">
                <div className="sm:w-36 w-1/4 sm:mx-0 ml-[5%] flex items-center justify-center">
                    <img
                        className="my-auto"
                        src="https://www.datalabelify.com/wp-content/uploads/2022/02/labelify-logo.png"
                        alt="Logo"
                    />
                </div>

                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="h-max text-xl block sm:hidden mr-[5%] py-1 px-2 hover:bg-gray-100 rounded hover:border-gray-500 cursor-pointer li-transition"
                >
                    <i className="bx bx-menu"></i>
                </button>

                <ul
                    className={` flex ${
                        navbarOpen ? "flex-col" : "hidden"
                    }  sm:flex sm:flex-row sm:items-center absolute sm:static top-16 w-full sm:w-max bg-white sm:bg-transparent h-screen sm:h-auto`}
                >
                    <li className="group p-4 sm:py-4 py-1 cursor-pointer relative">
                        <div className="flex items-center sm:border-none border p-4 sm:p-0 rounded-md">
                            <h3 className="font-semibold">Industries</h3>
                            <div className="ml-1 text-lg mt-1 h-max">
                                <i className="bx bx-chevron-down"></i>
                            </div>
                        </div>
                        <ul className="absolute z-10 -bottom-50 left-1/2 -translate-x-1/2 mt-2 p-3 bg-white rounded-md shadow-lg hidden group-hover:block w-11/12 sm:w-max border">
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Autonomus Vehicals
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Commerce
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Agricultural AI
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Financial Service
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Geospetial Technology
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Medical AI
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Goverment
                            </li>
                        </ul>
                    </li>

                    <li className="group p-4  sm:py-4 py-1 cursor-pointer relative">
                        <div className="flex items-center sm:border-none border p-4 sm:p-0 rounded-md">
                            <h3 className="font-semibold">Services</h3>
                            <div className="ml-1 text-lg mt-1 h-max">
                                <i className="bx bx-chevron-down"></i>
                            </div>
                        </div>
                        <ul className="absolute z-20 -bottom-50 left-1/2 -translate-x-1/2 mt-2 p-3 bg-white rounded-md shadow-lg hidden group-hover:block w-11/12   sm:w-max border">
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Video Annotation
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Image Annotation
                            </li>

                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Text Annotation
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Audio Transcription
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Image Segmentation
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Lidar Annotation
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Product Categorization
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Sentiment Analysis
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Content Moderation
                            </li>
                        </ul>
                    </li>

                    <li className="group p-4 sm:py-4 py-1 cursor-pointer relative">
                        <div className="flex items-center sm:border-none border p-4 sm:p-0 rounded-md">
                            <h3 className="font-semibold">Company</h3>
                            <div className="ml-1 text-lg mt-1 h-max">
                                <i className="bx bx-chevron-down"></i>
                            </div>
                        </div>
                        <ul className="absolute z-10 -bottom-50 left-1/2 -translate-x-1/2 mt-2 p-3 bg-white rounded-md shadow-lg hidden group-hover:block w-11/12 sm:w-max border">
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Autonomus Vehicals
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Commerce
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Agricultural AI
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Financial Service
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Geospetial Technology
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Medical AI
                            </li>
                            <li className="p-2 font-semibold hover:bg-blue-300 rounded-md text-center cursor-pointer li-transition">
                                Goverment
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
