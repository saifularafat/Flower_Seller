import { useState } from "react";
import { CiUser } from "react-icons/ci"
import { Link } from "react-router-dom";
const SignIn = () => {
    const [personal, setPersonal] = useState(false);
    return (
        <>
            <div className="flex-1 items-center justify-center cursor-pointer" onClick={() => setPersonal(!personal)}>
                <div className="w-full mx-auto">
                    <CiUser className="md:w-8 md:h-8 w-6 h-6 mx-auto text-[#282A33] border border-[#282A33] rounded-full" />
                </div>
                <span className="text-xs md:text-sm  font-medium md:block hidden text-center ">Sign In</span>
                <span className="text-xs font-medium block md:hidden">SignIn</span>
            </div>
            {
                personal && <div className="absolute top-14 text-slate-500 bg-slate-50 z-50 px-4 py-1 w-3/4 border border-slate-400 shadow-2xl">
                    <div className="border-0 border-b-[2px] border-slate-400 pb-3">
                        <Link to="" className="text-xs font-medium hover:underline leading-none">Your Dashboard</Link> <br />
                        <Link to="" className="text-xs font-medium hover:underline leading-none">Your Account </Link> <br />
                        <Link to="" className="text-xs font-medium hover:underline leading-none">Add Your Address </Link> <br />
                        <Link to="" className="text-xs font-medium hover:underline leading-none">Track Your Order </Link> <br />
                    </div>
                    <div className="py-2">
                        <Link to="" className="text-sm font-medium hover:underline leading-none">Sign out </Link> <br />
                    </div>
                </div>
            }
        </>
    );
};

export default SignIn;