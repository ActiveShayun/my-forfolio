import { NavLink } from "react-router-dom";
import AddReview from "../ReviewModal/AddReview";
import { useState } from "react";

const Navbar = () => {
    const link = <>
        <a className="font-semibold text-lg text-[#FAAD1B]" href="#banner">Home</a>
        <a className="font-semibold text-lg text-[#FAAD1B]" href="#portfolio">Portfolio</a>
        <a className="font-semibold text-lg text-[#FAAD1B]" href="#resume">Resume</a>
        <a className="font-semibold text-lg text-[#FAAD1B]" href="#blog">Blog</a>
        <a className="font-semibold text-lg text-[#FAAD1B]" href="#contact">Contact</a>
        <button
            className="font-semibold text-lg text-[#FAAD1B]"
            onClick={() => setIsOpen(true)}>Add Feedback</button>
    </>

    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className="sticky top-8 z-[500] bg-[#344C36] rounded-4xl px-2">
            <div className="navbar flex justify-between max-w-7xl mx-auto text-white opacity-70">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul data-aos="zoom-in"
                            tabIndex={0}
                            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[6666] mt-2 w-[450px] p-2 shadow text-black opacity-90">
                            {link}
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center justify-center bg-[#FAAD1B] w-[35px] h-[35px] rounded-full">
                            <span className="text-[#344C36] font-semibold text-xl">A</span>
                        </div>
                        <a className="text-xl playfair-display">Apu Roy</a>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-2 items-center">
                            {link}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <button class="px-3 py-1 text-lg font-semibold  
                        bg-[#FAAD1B] text-[#344C36] rounded-2xl">
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
            <AddReview isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Navbar;