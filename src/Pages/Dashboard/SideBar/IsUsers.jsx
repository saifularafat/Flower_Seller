import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const IsUsers = () => {
    return (
        <div>
            <ul className="space-y-0">
                <li>
                    <NavLink
                        to="/dashboard/userHome"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <FaHome className="text-xl" />
                        <span>User Home </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/selectItems"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        {/* <IoAddCircleSharp className="text-xl" /> */}
                        <span>SElect Items </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/paymentHistory"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        {/* <IoAddCircleSharp className="text-xl" /> */}
                        <span>Payment History </span>
                    </NavLink>
                </li>
                  {/* messages section start */}
                  <p className="py-2 my-1 pl-3 text-slate-600 font-semibold text-base uppercase bg-slate-100">Help section</p>
                <li className="pt-2">
                    <NavLink
                        to="/dashboard/userEmail"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Email </span>
                    </NavLink>
                </li>
                <li className="pb-2">
                    <NavLink
                        to="/dashboard/chat"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Chat </span>
                    </NavLink>
                </li>
                {/* information section  */}
                <p className="py-2 mt-1 pl-3 text-slate-600 font-semibold text-base uppercase bg-slate-100">Information</p>
                <li className="pt-2">
                    <NavLink
                        to="/dashboard/addressAdd"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Address Add </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/userProfile"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Profile </span>
                    </NavLink>
                </li>
                {/* messages section end */}
            </ul>
        </div>
    );
};

export default IsUsers;