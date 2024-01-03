import { FaBars } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import Logo from "./Logo";
import Search from "./Search";
import HederRight from "./SignInOrderCart/HederRight";
import { useState } from "react";

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
                {
                    isMenu &&
                    <div className='absolute top-0 left-0 transition-all duration-300 w-full z-40'>
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
                        <div className="bg-slate-400 py-3">
                            <p>saiful</p>
                            <p>saiful</p>
                            <p>saiful</p>
                            <p>saiful</p>
                            <p>saiful</p>
                            <p>saiful</p>
                            <p>saiful</p>
                            <p>saiful</p>
                            <p>saiful</p>
                            <p>saiful</p>
                        </div>
                    </div>
                }
            </div>
            <div className="md:w-1/12 w-1/2 md:block hidden">
                <Logo />
            </div>
            <div className="w-8/12 md:block hidden">
                <Search />
            </div>
            <div className=" md:w-1/5 md:block hidden">
                <HederRight />
            </div>
        </div>
    );
};

export default MiddleHeader;