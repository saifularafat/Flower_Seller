import { useState } from "react";
import useAuth from "../../api/useAuth";
import Swal from "sweetalert2";
import { FaAddressBook, FaBars, FaHistory, FaList, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdDashboardCustomize, MdManageAccounts } from "react-icons/md";
import { TbReorder } from "react-icons/tb";

const MyOrderMobile = () => {
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
        <div className="md:hidden block absolute top-5 right-0 w-full">
            <div className="flex items-center justify-end">
                <button
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}>
                    <FaBars className="text-xl text-right" />
                </button>
            </div>
            {/* Mobile ber */}
            <div className=" sticky -top-0 z-50 w-full right-0">
                {
                    isMenu &&
                    <div className='absolute top-0 left-0 transition-all duration-300 w-full z-50'>
                        <div className="flex items-center justify-end bg-slate-700 px-2 py-2">
                            <div>
                                <button onClick={() => setIsMenuOpen(false)}>
                                    <FiX className=" text-2xl font-bold text-slate-400" />
                                </button>
                            </div>
                        </div>
                        <div className="bg-slate-300 py-0 pl-2">
                            <p className="text-xl font-semibold text-slate-800">{user?.displayName}</p>
                            <div className="pt-2 space-y-3">
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
                    </div>
                }
            </div>
        </div>
    );
};

export default MyOrderMobile;