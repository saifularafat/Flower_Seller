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
                <button onClick={() => handelOrder(!order)} className="flex items-center justify-between w-full ">
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
                            className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <span>Hand Delivery </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink 
                            className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <span>Cash On Delivery </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink 
                            className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <span>Retune Order</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({ isActive }) => (isActive ? "active" : " default ")}>
                                <span>Order Cancel</span>
                            </NavLink>
                        </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default IsAdmin;