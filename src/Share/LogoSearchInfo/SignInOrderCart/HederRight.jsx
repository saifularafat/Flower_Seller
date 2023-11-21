import Cart from "./Cart";
import MyOrder from "./MyOrder";
import SignIn from "./SignIn";

const HederRight = () => {
    return (
        <div className=" flex items-center gap-5">
            <SignIn />
            <div className="md:block hidden">
                <MyOrder />
            </div>
            <Cart />
        </div>
    );
};

export default HederRight;