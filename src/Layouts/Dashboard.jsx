import { Link, Outlet } from "react-router-dom";
import IsAdmin from "../Pages/Dashboard/SideBar/IsAdmin";
import IsUsers from "../Pages/Dashboard/SideBar/IsUsers";
import { Helmet } from "react-helmet-async";
import useAuth from "../api/useAuth";
import img from "../assets/othersImg/avater.png"
import { BiSolidFlorist } from "react-icons/bi";

import Swal from "sweetalert2";
import useAdmin from "../api/useAdmin";
const Dashboard = () => {
    const { user, logOut } = useAuth()
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
        <div className="grid grid-cols-9">
            <Helmet>
                <title>Flowers Shop || Dashboard</title>
            </Helmet>
            <div className="col-span-2 h-screen overflow-y-scroll myScroll border border-r-2 relative md:block hidden">
                <Link to="/" className="flex items-center justify-center gap-2 py-2 shadow-lg sticky top-0 z-10 bg-white">
                    <BiSolidFlorist className="text-4xl text-blue-700" />
                    <h2 className="text-xl font-bold text-center text-blue-700 uppercase">Flowers Shop</h2>
                </Link>
                <p className="py-2 pl-3 text-slate-600 font-semibold text-base uppercase bg-slate-100">Dashboards</p>
                <div className="p-2">
                    {
                        isAdmin ?
                            <IsAdmin />
                            : <IsUsers />
                    }
                </div>
                <div className=" w-full bg-white sticky bottom-0 z-10 mt-1">
                    <div className="flex items-start gap-3 pl-4 py-2">
                        <img src={user && user?.photoURL
                            ? user?.photoURL
                            : img
                        } alt=""
                            className="md:w-11 md:h-11 object-cover w-6 h-6 text-[#282A33] border border-[#282A33] rounded-full" />
                        <div className="text-left">
                            {
                                user && <p className="text-sm font-medium uppercase leading-none text-slate-700">{user?.displayName}</p>
                            }
                            <button
                                onClick={handlerLogOut}
                                className="text-sm font-medium hover:underline hover:text-red-700 transition-all duration-200 text-slate-500 leading-none">
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-7 md:px-3 py-5 h-screen overflow-y-scroll myScroll">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;