import { Link } from "react-router-dom";
import useAuth from "../../../api/useAuth";
import img from "../../../assets/othersImg/avater.png"
import Swal from "sweetalert2";
import useAdmin from "../../../api/useAdmin";
const SignIn = () => {
    const {
        user,
        logOut } = useAuth();
    const [isAdmin] = useAdmin();

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
    };

    return (
        <div className="relative cursor-pointer group">
            <div className="w-full mx-auto group-hover:block">
                <div className="relative group">
                    <img src={user && user?.photoURL
                        ? user?.photoURL
                        : img
                    } alt=""
                        className="md:w-11 md:h-11 w-9 h-9 mx-auto text-[#282A33] border border-[#282A33] rounded-full" />
                    {
                        user && <>
                            <span className="md:h-4 h-3 md:w-4 w-3 bg-green-500 absolute rounded-full bottom-[2px] md:right-3 right-0 md:border-[3px] border-[2px] border-white"></span>
                            <span className="md:h-4 h-3 md:w-4 w-3 bg-green-500 absolute rounded-full bottom-[2px] md:right-3 right-0 animate-ping transition-all duration-300"></span></>
                    }
                </div>
            </div>
            {
                user ?
                    <span className="text-xs lg:text-sm font-medium md:block hidden text-center group-hover:block">
                        {user?.displayName}
                    </span>
                    : <span className="text-xs lg:text-sm font-medium md:block hidden text-center group-hover:block">
                        Sign In
                    </span>
            }
            <div className="md:hidden block">
                <span className="text-xs text-slate-300 font-medium block md:hidden group-hover:block">SignIn</span>
            </div>
            <div className="absolute hidden top-13 text-slate-500 bg-slate-50 z-50 px-4 py-1 w-44 border border-slate-400 shadow-2xl group-hover:block rounded overflow-hidden">
                <div className="border-0 border-b-[2px] border-slate-400 pb-3">
                    {/* {
                    user && <OrderButton />
                } */}
                    {
                        user ? (
                            <button className="">
                                {
                                    isAdmin ? <Link to="/dashboard/adminHome" className="text-xs font-medium hover:underline leading-none">
                                        Your Dashboard
                                    </Link>
                                        :
                                        <Link to="/dashboard/userHome" className="text-xs font-medium hover:underline leading-none">
                                            Your Dashboard
                                        </Link>
                                }
                            </button>
                        )
                            :
                            <></>
                    }

                    {
                        user &&
                            isAdmin ?
                            <>
                                <br />
                                <Link to="/dashboard/adminProfile" className="text-xs font-medium hover:underline leading-none">
                                    Your Profile
                                </Link>
                                <br />
                                <Link to="/dashboard/email" className="text-xs font-medium hover:underline leading-none">
                                    Your Email
                                </Link>
                            </>
                            :
                            <>
                                <br />
                                <Link to="/dashboard/userProfile" className="text-xs font-medium hover:underline leading-none">
                                    Your Profile
                                </Link>
                                <br />
                                <Link to="/dashboard/addressAdd" className="text-xs font-medium hover:underline leading-none">
                                    Add Your Address
                                </Link>
                                <br />
                                <Link to="my-order" className="text-xs font-medium hover:underline leading-none">
                                    Track Your Order
                                </Link>
                                <br />
                            </>
                    }
                </div>
                <div className="py-2">
                    {
                        user ?
                            <button
                                onClick={handlerLogOut}
                                className="text-sm font-medium hover:underline leading-none">
                                Sign out
                            </button>
                            :
                            <Link to="signIn" className="text-sm font-medium hover:underline leading-none">
                                Sign In
                            </Link>
                    }
                    <br />
                </div>
            </div>
        </div >
    );
};

export default SignIn;