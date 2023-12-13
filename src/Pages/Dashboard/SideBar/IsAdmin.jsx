import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const IsAdmin = () => {
    const [order, handelOrder] = useState(false);
    return (
        <div>
            <ul className="space-y-3">
                <li>
                    <NavLink>
                        <span>All Users </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink>
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
                            <NavLink className={``}>
                                <span>Hand Delivery </span>
                            </NavLink>
                        </li>
                        <li className=" w-full">
                            <NavLink className={``}>
                                <span>Cash On Delivery </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
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