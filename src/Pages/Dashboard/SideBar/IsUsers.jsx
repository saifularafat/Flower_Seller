import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrCheckboxSelected } from "react-icons/gr";
import { AiFillCreditCard } from "react-icons/ai";
import { MdAddShoppingCart, MdEmail, MdOutlineChat, MdOutlineManageHistory } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";

const IsUsers = () => {
    return (
        <div>
            <ul className="space-y-1">
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
                        <GrCheckboxSelected className="text-xl" />
                        <span>SElect Items </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/orderHistory"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <MdOutlineManageHistory className="text-xl" />
                        <span>Order History </span>
                    </NavLink>
                </li>
                <li className="pb-2">
                    <NavLink
                        to="/dashboard/paymentHistory"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <AiFillCreditCard className="text-xl" />
                        <span>Payment History </span>
                    </NavLink>
                </li>
                {/* messages section start */}
                <p className="py-2 my-1 pl-3 text-slate-600 font-semibold text-base uppercase bg-slate-100">Help section</p>
                <li className="">
                    <NavLink
                        to="/dashboard/userEmail"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <MdEmail className="text-xl" />
                        <span>Email </span>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="/dashboard/userChat"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <MdOutlineChat className="text-xl" />
                        <span>Chat </span>
                    </NavLink>
                </li>
                {/* information section  */}
                <p className="py-2 mt-1 pl-3 text-slate-600 font-semibold text-base uppercase bg-slate-100">Information</p>
                <li className="">
                    <NavLink
                        to="/dashboard/addressAdd"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <MdAddShoppingCart className="text-xl" />
                        <span>Address Add </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/userProfile"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <ImProfile className="text-xl" />
                        <span>Profile </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <IoHomeOutline className="text-xl" />
                        <span>Home </span>
                    </NavLink>
                </li>
                {/* messages section end */}
            </ul>
        </div>
    );
};

export default IsUsers;