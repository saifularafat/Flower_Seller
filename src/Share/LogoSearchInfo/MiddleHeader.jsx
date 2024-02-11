import { FaBars } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import Logo from "./Logo";
import Search from "./Search";
import HederRight from "./SignInOrderCart/HederRight";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MiddleHeader = () => {
    const [isMenu, setIsMenuOpen] = useState(false)
    return (
        <div className="flex items-center justify-between py-1 md:mx-6 px-2 md:bg-inherit bg-slate-500/80">
            <div className="md:hidden block">
                <div className="flex items-center justify-between">
                    <button
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}>
                        <FaBars className=" text-2xl" />
                    </button>
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <HederRight />
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="">
                    {
                        isMenu &&
                        <div className='absolute top-0 left-0 transition-all duration-300 w-full z-50'>
                            <div className="flex items-center justify-between bg-slate-700 px-2 py-2">
                                <div>
                                    <button onClick={() => setIsMenuOpen(false)}>
                                        <FiX className=" text-2xl font-bold text-slate-400" />
                                    </button>
                                </div>
                                <div className="">
                                    <Logo />
                                </div>
                                <div className="">
                                    <HederRight />
                                </div>
                            </div>
                            <div className="bg-slate-400 py-3 pl-2">
                                <ul className="space-y-2">
                                    <li>
                                        <NavLink
                                            to="thanksgiving-flower"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            Thanksgiving
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="birthday-flower"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            Birthday
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="independenceday-flower"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            IndependenceDay
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="disney-flower"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            DISNEY
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="valentineDay-flower"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            Valentine's
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="sympathy-flower"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            Sympathy
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="flowers-6t9"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            Flowers
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="flower-plants"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            plants
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="gift-more-flower"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            Gifts & More
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="flower-sale"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            sale
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="community"
                                            className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                            Community
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="md:w-1/12 w-1/2 md:block hidden">
                <Logo />
            </div>
            <div className="lg:w-8/12 md:w-full  relative">
                <Search />
            </div>
            <div className=" md:w-1/5 md:block hidden">
                <HederRight />
            </div>
        </div>
    );
};

export default MiddleHeader;