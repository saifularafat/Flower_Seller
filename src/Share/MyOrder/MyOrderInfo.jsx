import { FaHome } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { Link } from "react-router-dom";
import car from "../../assets/othersImg/car.webp";

const MyOrderInfo = ({ orderInfo }) => {
    return (
        <>
            <div className="flex items-center justify-between  bg-white rounded-md sticky top-0">
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
                            <p className="text-xs font-semibold text-slate-500">08:00AM - 05:30PM</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                orderInfo.map(orders =>
                    <div key={orders?._id} className="flex items-center justify-between gap-4  border border-slate-100 rounded shadow-xl">
                        <div className="flex items-center gap-3">
                            <img src={orders?.orderInfo?.image ? orders?.orderInfo?.image : orders?.image} alt="" className="w-24 h-24 rounded border object-cover" />
                            <div>
                                <h5 className="text-lg font-semibold text-slate-800">{orders?.orderInfo?.name ? orders?.orderInfo?.name : orders?.name}</h5>
                                <p className="text-sm font-bold">Total Price :{orders?.orderInfo?.totalPrice ? orders?.orderInfo?.totalPrice : orders?.totalPrice}$</p>
                                <p className="text-xs text-slate-600 font-bold">Order Date: {orders?.orderInfo?.date ? orders?.orderInfo?.date : orders?.date}</p>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-end">{orders?.orderInfo?.paymentType ? orders?.orderInfo?.paymentType : orders?.paymentType}</h3>
                           {
                            orders?.orderInfo?.transitionId &&  <p className="text-end text-xs">transition {orders?.orderInfo?.transitionId}</p>
                           }
                        </div>
                        <div className="space-y-2 pr-2">
                            <div className="">
                                <Link to={`/myOrder/orderCancel/${orders?._id}`} className="text-sm font-medium tracking-wide py-1 px-2 bg-red-700 text-slate-900 rounded-md"> Order Cancel</Link>
                            </div>
                            <div>
                                <Link to={`/myOrder/orderDetails/${orders?._id}`} className="text-sm font-medium tracking-wide py-1 px-2 bg-blue-800 text-white rounded-md">Order Details </Link>
                            </div>
                        </div>
                    </div>)
            }
        </>
    );
};

export default MyOrderInfo;