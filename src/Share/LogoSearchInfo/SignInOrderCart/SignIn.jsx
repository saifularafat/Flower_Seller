import { CiUser } from "react-icons/ci"
import { Link } from "react-router-dom";
import useAuth from "../../../api/useAuth";
import Swal from "sweetalert2";
const SignIn = () => {
    const { user, logOut } = useAuth();

    const handlerLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your logOut success.!',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
    }
    return (
        <div className="relative cursor-pointer group">
            <div className="w-full mx-auto group-hover:block">
                {user ?
                    <CiUser className="md:w-8 md:h-8 w-6 h-6 mx-auto text-[#282A33] border border-[#282A33] rounded-full" />
                    : <span className="w-5  h-5 bg-slate-600 border border-slate-700 py-2  px-4 mx-auto border] rounded-full"></span>}
            </div>
            {
                user ?
                    <span className="text-xs md:text-sm font-medium md:block hidden text-center group-hover:block">
                        Sign In
                    </span>
                    :
                    <span className="text-xs md:text-sm font-medium md:block hidden text-center group-hover:block">
                        Sign Out
                    </span>
            }
            <div className="md:hidden block">
                <span className="text-xs font-medium block md:hidden group-hover:block">SignIn</span>
            </div>
            <div className="absolute hidden top-10 text-slate-500 bg-slate-50 z-50 px-4 py-1 w-44 border border-slate-400 shadow-2xl group-hover:block rounded overflow-hidden">
                <div className="border-0 border-b-[2px] border-slate-400 pb-3">
                    <Link to="" className="text-xs font-medium hover:underline leading-none">
                        Your Dashboard
                    </Link>
                    <br />
                    <Link to="" className="text-xs font-medium hover:underline leading-none">
                        Your Account
                    </Link>
                    <br />
                    <Link to="" className="text-xs font-medium hover:underline leading-none">
                        Add Your Address
                    </Link>
                    <br />
                    <Link to="" className="text-xs font-medium hover:underline leading-none">
                        Track Your Order
                    </Link>
                    <br />
                </div>
                <div className="py-2">
                    {
                        user ?

                            <Link to="signIn" className="text-sm font-medium hover:underline leading-none">
                                Sign In
                            </Link>
                            :
                            <button
                                onClick={handlerLogOut}
                                className="text-sm font-medium hover:underline leading-none">
                                Sign out
                            </button>
                    }
                    <br />
                </div>
            </div>
        </div >
    );
};

export default SignIn;