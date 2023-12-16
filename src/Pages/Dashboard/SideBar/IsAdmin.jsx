import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const IsAdmin = () => {
    const [order, handelOrder] = useState(false);
    return (
        <div>
            <ul className="space-y-0">
                <li>
                    <NavLink
                        to="/dashboard/adminHome"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Admin Home </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/addItem"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Add Item </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/allUsers"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>All Users </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/allPayment"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>All Payment </span>
                    </NavLink>
                </li>
                {/* order link start */}
                <button onClick={() => handelOrder(!order)} className="flex items-center justify-between w-full text-lg font-medium py-1 pl-2 hover:bg-slate-50  transition-all duration-200">
                    <span>Order information</span>
                    {
                        order ?
                            <BsChevronDown />
                            : <BsChevronUp />
                    }
                </button>
                {
                    order && <div className="space-y-2 pl-2">
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/handDelivery"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <span>Hand Delivery </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/cashOnDelivery"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <span>Cash On Delivery </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/successOrder"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <span>Success Order</span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink
                                to="/dashboard/retuneOrder"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <span>Retune Order</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/orderCancel"
                                className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <span>Order Cancel</span>
                            </NavLink>
                        </li>
                    </div>
                }
                {/* order link end */}
                {/* messages section start */}
                <p className="py-2 mt-1 pl-3 text-slate-600 font-semibold text-base uppercase bg-slate-100">Help section</p>
                <li>
                    <NavLink
                        to="/dashboard/emil"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Email </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/chat"
                        className={({ isActive }) => (isActive ? "active" : " default ")}>
                        <span>Chat </span>
                    </NavLink>
                </li>
                {/* messages section end */}
            </ul>
        </div>
    );
};

export default IsAdmin;