import Logo from "./Logo";
import Search from "./Search";
import HederRight from "./SignInOrderCart/HederRight";

const MiddleHeader = () => {
    return (
        <div className="grid md:grid-cols-6 grid-cols-2 gap-5 content-center border py-2 mx-6">
            <div className="col-span-1 md:col-span-1">
                <Logo />
            </div>
            <div className="md:col-span-3 md:block hidden">
                <Search />
            </div>
            <div className="col-span-1 md:col-span-2">
                <HederRight />
            </div>
        </div>
    );
};

export default MiddleHeader;