import { Outlet } from "react-router-dom";
import IsAdmin from "../Pages/Dashboard/SideBar/IsAdmin";
import IsUsers from "../Pages/Dashboard/SideBar/IsUsers";
import { Helmet } from "react-helmet-async";
import useAuth from "../api/useAuth";
import img from "../assets/othersImg/avater.png"
import Swal from "sweetalert2";
const Dashboard = () => {
    const { user, logOut } = useAuth()
    const isAdmin = true;

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
        <div className=" grid grid-cols-9">
            <Helmet>
                <title>Flowers Shop || Dashboard</title>
            </Helmet>
            <div className="col-span-2  h-screen border border-r-2">
                <h2 className="text-xl font-semibold text-center py-3 uppercase border-0 border-b-[2px] border-slate-400">Dashboard</h2>
                <div className="p-2">
                    {
                        isAdmin ?
                            <IsAdmin />
                            : <IsUsers />
                    }
                </div>
                <div className="absolute bottom-6 left-5">
                    <div className="flex items-center gap-3">
                        <img src={user && user?.photoURL
                            ? user?.photoURL
                            : img
                        } alt=""
                            className="md:w-10 md:h-10 w-6 h-6 mx-auto text-[#282A33] border border-[#282A33] rounded-full" />
                        <div>
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
            <div className="col-span-7 bg-slate-50 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;