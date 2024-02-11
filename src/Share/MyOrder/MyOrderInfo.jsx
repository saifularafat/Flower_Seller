import { FaHome } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { Link } from "react-router-dom";
import car from "../../assets/othersImg/car.webp";
import MyOrderMobile from "./MyOrderMobile";

const MyOrderInfo = ({ orderInfo }) => {
    console.log(orderInfo);
    return (
        <>
            <div className="md:flex items-center justify-between bg-white rounded-md sticky top-0 z-20">
                <h2 className=" uppercase md:text-xl text-xs text-center md:text-ellipsis font-semibold text-slate-500">Order history</h2>
                <div className="md:flex items-center gap-4 bg-white md:px-4 px-2 md:py-2 py-1 shadow-2xl shadow-slate-800 rounded-xl">
                    <div className="flex items-center gap-1">
                        <img src={car} alt="" className="md:h-7 h-4 object-cover" />
                        <p className="text-sm font-semibold text-slate-500">DELIVERY HOURS</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaHome className="md:text-base text-xl" />
                        <div className="flex items-center">
                            <p className="text-sm font-medium md:font-semibold text-slate-500 leading-none">Residential:</p>
                            <p className="text-xs font-semibold text-slate-500 md:pl-0 pl-1">9:30AM - 8:30PM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoIosBusiness className="md:text-base text-xl" />
                        <div className="flex items-center">
                            <p className="text-sm font-medium md:font-semibold text-slate-500 leading-none">Businesses:</p>
                            <p className="text-xs font-semibold text-slate-500 md:pl-0 pl-1">08:00AM - 05:30PM</p>
                        </div>
                    </div>
                    <div className=" -pb-5">
                        {/* order menu by Mobile */}
                        <MyOrderMobile />
                    </div>
                </div>
            </div>
            {
                orderInfo.map(orders =>
                    <div key={orders?._id} className="md:flex items-center justify-between gap-4 my-3 py-2 border border-slate-100 rounded shadow-xl">
                        <div className="md:flex items-center justify-between md:w-10/12">
                            <div className="md:flex items-center gap-3">
                                <img src={orders?.orderInfo?.image ? orders?.orderInfo?.image : orders?.image} alt="" className="md:w-24 w-full h-24 md:mx-0 mx-auto rounded border object-cover" />
                                <div className="pl-[2px]">
                                    <h5 className="md:text-lg text-base font-semibold text-slate-800">{orders?.orderInfo?.name ? orders?.orderInfo?.name : orders?.name}</h5>
                                    <p className="text-sm md:font-bold">Total Price :{orders?.orderInfo?.totalPrice ? orders?.orderInfo?.totalPrice : orders?.totalPrice}$</p>
                                    <p className="text-xs text-slate-600 md:font-bold">Order Date: {orders?.orderInfo?.date ? orders?.orderInfo?.date : orders?.date}</p>
                                </div>
                            </div>
                            <div className="md:pt-0 md:flex-col flex items-center gap-2 py-1 pl-1">
                                <h3 className="md:text-end md:text-base text-xs ">{orders?.orderInfo?.paymentType ? orders?.orderInfo?.paymentType : orders?.paymentType}</h3>
                                <h3 className={`md:text-center md:text-sm text-[10px] ${orders?.payStatus === "pending" ? " text-red-700" : "text-emerald-500"}`} >{orders?.orderInfo?.payStatus ? orders?.orderInfo?.payStatus : orders?.payStatus}</h3>
                                {
                                    orders?.orderInfo?.transitionId && <p className="text-end text-xs">transition {orders?.orderInfo?.transitionId}</p>
                                }
                            </div>
                        </div>

                        <div className="md:flex-none flex items-center justify-center gap-2">
                            <div className="">
                                <Link to={`/myOrder/orderCancel/${orders?._id}`} className="text-sm font-medium tracking-wide py-1 md:px-2 px-1 bg-red-700 text-slate-900 rounded-md"> Order Cancel</Link>
                            </div>
                            <div>
                                <Link to={`/myOrder/orderDetails/${orders?._id}`} className="text-sm font-medium tracking-wide py-1 md:px-2 px-1 bg-blue-800 text-white rounded-md">Order Details </Link>
                            </div>
                        </div>
                    </div>)
            }
        </>
    );
};

export default MyOrderInfo;