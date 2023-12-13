import { Outlet } from "react-router-dom";
import IsAdmin from "../Pages/Dashboard/SideBar/IsAdmin";
import IsUsers from "../Pages/Dashboard/SideBar/IsUsers";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const isAdmin = true;
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
            </div>
            <div className="col-span-7 bg-slate-50 p-4">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias!</h2>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;