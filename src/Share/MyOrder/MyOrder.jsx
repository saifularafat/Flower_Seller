import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaHistory, FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { MdDashboardCustomize, MdManageAccounts } from "react-icons/md";
import { FaAddressBook, FaList } from "react-icons/fa6";
import { TbReorder } from "react-icons/tb";
import useAuth from "../../api/useAuth";
import Swal from "sweetalert2";
import useTotalPaymentData from "../../api/useTotalPaymentData";
import MyOrderInfo from "./MyOrderInfo";
const MyOrder = () => {
    const {
        user,
        logOut } = useAuth();

    const [totalPayment, refetch] = useTotalPaymentData();
    const orderInfo = totalPayment.filter((orLength) => (orLength?.orderInfo?.payStatus === "pending" || orLength?.payStatus === "pending") ||
        (orLength?.orderInfo?.payStatus === "success" || orLength?.payStatus === "success"));

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
        <div className=" grid grid-cols-6 gap-5 overflow-y-scroll myScroll h-screen">
            <Helmet>
                <title>My Order || Flower Shop </title>
            </Helmet>
            <div className="col-span-1 space-y-3 shadow-2xl shadow-slate-700  pt-8 pl-2 min-h-screen overflow-y-hidden">
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
            <div className="col-span-5 md:space-y-5 md:py-7 py-3 ">
                <MyOrderInfo orderInfo={orderInfo} refetch={refetch} />
            </div>
        </div>
    );
};

export default MyOrder;