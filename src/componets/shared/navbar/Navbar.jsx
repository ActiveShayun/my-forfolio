import { NavLink } from "react-router-dom";

const Navbar = () => {
    const link = <>
        <a className="font-bold" href="#banner">Home</a>
        <a className="font-bold" href="#portfolio">Portfolio</a>
        <a className="font-bold" href="#resume">Resume</a>
        <a className="font-bold" href="#blog">Blog</a>
        <a className="font-bold" href="#contact">Contact</a>
    </>
    return (
        <div className="sticky top-0 z-[500] bg-[#2E0B2A] opacity-85 rounded-b-sm">
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
                    <a className="btn btn-ghost text-xl playfair-display">Apu Roy</a>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-2 items-center">
                            {link}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <button class="px-3 py-1 text-lg font-semibold text-white bg-white/20 border border-white/40 backdrop-blur-md rounded-xl shadow-lg transition-all hover:bg-white/30 hover:shadow-xl active:scale-95">
                          Hire Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;