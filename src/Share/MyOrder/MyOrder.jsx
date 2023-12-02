import { Helmet } from "react-helmet-async";
import order from "../../assets/flowers/trending/festiveFrosty.webp"
import { Link } from "react-router-dom";
import car from "../../assets/othersImg/car.webp";
import { FaHistory, FaHome, FaSignOutAlt } from "react-icons/fa"
import { IoIosBusiness } from "react-icons/io";
import { MdDashboardCustomize, MdManageAccounts } from "react-icons/md";
import { FaAddressBook, FaList } from "react-icons/fa6";
import { TbReorder  } from "react-icons/tb";
const MyOrder = () => {
    return (
        <div className=" grid grid-cols-6 gap-5">
            <Helmet>
                <title>Flower Shop || My Order </title>
            </Helmet>
            <div className="col-span-1 space-y-3 shadow-2xl shadow-slate-700  pt-8 pl-2 h-screen">
                <p className="text-xl font-semibold text-slate-800">User Name</p>
                <div className="pt-5 space-y-8">
                    <Link to="" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <MdDashboardCustomize className="text-green-600 text-2xl"/>
                        <span className="text-base text-green-600 font-semibold">Your Dashboard</span>
                    </Link>
                    <Link to="" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <MdManageAccounts className="text-green-600 text-2xl"/>
                        <span className="text-base text-green-600 font-semibold ">Your Account</span>
                    </Link>
                    <Link to="" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <FaAddressBook className="text-green-600 text-2xl"/>
                        <span className="text-base text-green-600 font-semibold ">Add Address</span>
                    </Link>
                    <Link to="" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <TbReorder className="text-green-600 text-2xl"/>
                        <span className="text-base text-green-600 font-semibold ">Order History</span>
                    </Link>
                    <Link to="" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <FaList className="text-green-600 text-2xl"/>
                        <span className="text-base text-green-600 font-semibold ">Gift List</span>
                    </Link>
                    <Link to="" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <FaHistory className="text-green-600 text-2xl"/>
                        <span className="text-base text-green-600 font-semibold ">Payment History</span>
                    </Link>
                    <Link to="" className="flex items-center gap-2 border-0 border-b border-slate-200 pb-2 w-full">
                        <FaSignOutAlt className="text-green-600 text-2xl"/>
                        <span className="text-base text-green-600 font-semibold ">Sign Out</span>
                    </Link>
                </div>
            </div>
            <div className="col-span-5 space-y-3 pt-7">
                <div className="flex items-center justify-between">
                    <h2 className=" uppercase text-xl font-semibold text-slate-500">Order history</h2>
                    <div className="flex items-center gap-4 bg-white px-4 py-2 shadow-2xl shadow-slate-800 rounded-xl">
                        <div className="flex items-center gap-1">
                            <img src={car} alt="" className="h-7 object-cover" />
                            <p className="text-sm font-semibold text-slate-500">DELIVERY HOURS</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaHome />
                            <div>
                                <p className="text-sm font-semibold text-slate-500 leading-none">Residential:</p>
                                <p className="text-xs font-semibold text-slate-500">9:30AM - 8:30PM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <IoIosBusiness />
                            <div>
                                <p className="text-sm font-semibold text-slate-500 leading-none">Businesses:</p>
                                <p className="text-xs font-semibold text-slate-500">9:30AM - 5:30PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4 border border-slate-100 rounded shadow-xl">
                    <div className="flex items-center gap-3">
                        <img src={order} alt="" className="w-24 h-24 rounded border object-cover" />
                        <div>
                            <h5 className="text-lg font-semibold text-slate-800">Flowers Sweet </h5>
                            <p className="text-sm font-bold">Price: $57.70</p>
                            <p className="text-xs text-slate-600 font-bold">Order Date: 05/10/22</p>
                        </div>
                    </div>
                    <h3>Home delivery</h3>
                    <div className="space-y-2">
                        <div className="">
                            <Link to="" className="text-sm font-medium tracking-wide py-1 px-2 bg-red-700 text-slate-900 rounded-md"> Order Cancel</Link>
                        </div>
                        <div>
                            <Link to="" className="text-sm font-medium tracking-wide py-1 px-2 bg-blue-800 text-white rounded-md">Order Details </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;