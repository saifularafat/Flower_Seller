import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className=" grid grid-cols-6 ">
            <div className="col-span-1 bg-slate-100 h-screen border border-r-2 p-2">

            </div>
            <div className="col-span-5 bg-slate-100">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias!</h2>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;