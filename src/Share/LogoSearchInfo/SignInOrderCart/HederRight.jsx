import Cart from "./Cart";
import MyOrder from "./MyOrder";
import SignIn from "./SignIn";

const HederRight = () => {
    return (
        <div className=" flex items-center justify-between md:gap-0 gap-3 ">
            <SignIn />
            <div className="md:block hidden relative">
                <MyOrder />
            </div>
            <Cart />
        </div>
    );
};

export default HederRight;