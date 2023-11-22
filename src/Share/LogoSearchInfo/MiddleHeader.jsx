import { FaBars } from "react-icons/fa6";
import Logo from "./Logo";
import Search from "./Search";
import HederRight from "./SignInOrderCart/HederRight";

const MiddleHeader = () => {
    return (
        <div className="flex items-center justify-between py-1 md:mx-6 mx-2">
            <div className="md:hidden block">
                <FaBars className=" text-xl"/>
                <span className="text-xs font-semibold">Menu</span>
            </div>
            <div className="md:w-1/12 w-1/2">
                <Logo />
            </div>
            <div className="w-8/12 md:block hidden">
                <Search />
            </div>
            <div className=" md:w-1/5 ">
                <HederRight />
            </div>
        </div>
    );
};

export default MiddleHeader;