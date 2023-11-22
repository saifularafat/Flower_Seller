import { CiUser } from "react-icons/ci"
import { Link } from "react-router-dom";
const SignIn = () => {
    return (
        <Link to="" className="flex-1 items-center justify-center">
            <div className="w-full mx-auto">
                <CiUser className="md:w-8 md:h-8 w-6 h-6 mx-auto text-[#282A33] border border-[#282A33] rounded-full" />
            </div>
            <span className="text-xs md:text-sm  font-medium md:block hidden text-center ">Sign In</span>
            <span className="text-xs font-medium block md:hidden">SignIn</span>
        </Link>
    );
};

export default SignIn;