import { Link } from "react-router-dom";
import useAuth from "../../../api/useAuth";
import img from "../../../assets/othersImg/avater.png"
import Swal from "sweetalert2";
const SignIn = () => {

    const {
        user,
        logOut } = useAuth();
        /* TODO: admin link and component */
    const isAdmin = false;

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
                <img src={user && user?.photoURL
                    ? user?.photoURL
                    : img
                } alt=""
                    className="md:w-10 md:h-10 w-8 h-8 mx-auto text-[#282A33] border border-[#282A33] rounded-full" />
            </div>
            {
                user ?
                    <span className="text-xs md:text-sm font-medium md:block hidden text-center group-hover:block">
                        {user?.displayName}
                    </span>
                    : <span className="text-xs md:text-sm font-medium md:block hidden text-center group-hover:block">
                        Sign In
                    </span>
            }
            <div className="md:hidden block">
                <span className="text-xs text-slate-300 font-medium block md:hidden group-hover:block">SignIn</span>
            </div>
            <div className="absolute hidden top-13 text-slate-500 bg-slate-50 z-50 px-4 py-1 w-44 border border-slate-400 shadow-2xl group-hover:block rounded overflow-hidden">
                <div className="border-0 border-b-[2px] border-slate-400 pb-3">
                    {
                        user && (
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
                    }

                    {
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