import { Link } from "react-router-dom";
import useAuth from "../../api/useAuth";
import { MdDashboardCustomize, MdManageAccounts } from "react-icons/md";
import { FaAddressBook, FaBars, FaHistory, FaList, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { TbReorder } from "react-icons/tb";
import Swal from "sweetalert2";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const MyOrderLeft = () => {
    const [isMenu, setIsMenuOpen] = useState(false);
    const { user, logOut } = useAuth();

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
        <>
            <div className="md:col-span-1 md:block hidden space-y-3 shadow-2xl shadow-slate-700  pt-8 pl-2 min-h-screen overflow-y-hidden">
                <p className="text-xl font-semibold text-slate-800">{user?.displayName}</p>
                <div className="pt-5 space-y-8">
                    <Link to="/dashboard/userHome" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <MdDashboardCustomize className="text-green-600 text-2xl" />
                        <span className="text-base text-green-600 font-semibold">Your Dashboard</span>
                    </Link>
                    <Link to="/dashboard/userProfile" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <MdManageAccounts className="text-green-600 text-2xl" />
                        <span className="text-base text-green-600 font-semibold ">Your Account</span>
                    </Link>
                    <Link to="/dashboard/addressAdd" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <FaAddressBook className="text-green-600 text-2xl" />
                        <span className="text-base text-green-600 font-semibold ">Add Address</span>
                    </Link>
                    <Link to="/dashboard/orderHistory" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <TbReorder className="text-green-600 text-2xl" />
                        <span className="text-base text-green-600 font-semibold ">Order History</span>
                    </Link>
                    <Link to="/gift-list" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <FaList className="text-green-600 text-2xl" />
                        <span className="text-base text-green-600 font-semibold ">Gift List</span>
                    </Link>
                    <Link to="/dashboard/paymentHistory" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <FaHistory className="text-green-600 text-2xl" />
                        <span className="text-base text-green-600 font-semibold ">Payment History</span>
                    </Link>
                    <div className="py-2">
                        {
                            user ?
                                <button
                                    onClick={handlerLogOut}
                                    className="flex items-center gap-2 text-sm font-medium leading-none">
                                    <FaSignOutAlt className="text-green-600 text-2xl" />
                                    <span className="text-base text-green-600 font-semibold ">Sign Out</span>
                                </button>
                                :
                                <Link to="signIn" className="flex items-center gap-2 text-sm font-medium leading-none">
                                    <FaSignInAlt className="text-green-600 text-2xl" />
                                    <span className="text-base text-green-600 font-semibold ">Sign In</span>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrderLeft;