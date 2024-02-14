import { Outlet } from "react-router-dom";
import useAdmin from "../api/useAdmin";
import useAuth from "../api/useAuth";
import EmailLeftSite from "../Pages/Dashboard/Admin/EmailAdmin/EmailLeftSite/EmailLeftSite";
import EmailSearch from "../Pages/Dashboard/Admin/EmailAdmin/EmailSearch";

const EmailLayout = () => {
    const { user } = useAuth()
    return (
        <div className="grid grid-cols-9">
            <div className="col-span-2 bg-white h-screen overflow-y-visible">
               <EmailLeftSite />
            </div>
            <div className="col-span-7 md:px-3 py-5 h-[580px] overflow-y-scroll myScroll md:bg-transparent bg-slate-200">
                <EmailSearch />
                <Outlet />
            </div>
        </div>
    );
};

export default EmailLayout;