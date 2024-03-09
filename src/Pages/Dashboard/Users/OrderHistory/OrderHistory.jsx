import { Helmet } from "react-helmet-async";
import userEmailToPayment from "../../../../api/useEmailPayment";
import NoDataDashboard from "../../../../components/NoDataDashboard";
import { Link } from "react-router-dom";

const OrderHistory = () => {
    const [payments] = userEmailToPayment();
    return (
        <div>
            <Helmet>
                <title>Flower Shop || Order History </title>
            </Helmet>

            {
                payments?.length > 0 ?
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-3 md:py-0 my-3">
                        {
                            payments.map(pay =>
                                <div key={pay?._id} className="px-2 py-4 shadow-lg font-sans rounded-xl space-y-2 h-auto bg-white">
                                    <div className="flex w-full h-32 lg:h-[200px] relative">
                                        <img className="rounded-lg w-full h-full"
                                            src={pay?.image}
                                            alt="order flower" />
                                    </div>
                                    <div className=" font-semibold space-y-1 ">
                                        <p className="text-gray-900 text-xs md:text-sm font-medium"> <span className="text-base capitalize font-semibold pr-1">Flower Name: </span>{pay?.name}</p>
                                        <p className="text-gray-900 text-xs md:text-sm font-medium"> <span className="text-base capitalize font-semibold pr-1">Price: </span>{pay?.totalPrice}$</p>
                                        {
                                            pay?.payStatus === "pending"
                                                ?
                                                <p className="text-gray-900 text-xs md:text-sm font-medium capitalize">Payment Type: <span className="text-red-600">{pay?.paymentType}</span></p>
                                                :
                                                <p className="text-gray-900 text-xs md:text-sm font-medium lowercase"> <span className="text-base capitalize font-semibold pr-1">Transition Id: </span>{pay?.transition_id}</p>
                                        }
                                    </div>
                                    <p className="text-red-900 leading-3 text-xs">{pay?.duration}</p>
                                    <div className="flex items-center justify-center text-sm md:text-base pt-2">
                                        <Link to={`/paymentDetails/${pay?._id}`}>
                                            <button className="text-xl px-5 py-2 rounded-lg bg-blue-600 text-white relative overflow-hidden group z-10">
                                                <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
                                                <span className="absolute bg-sky-700 rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
                                                <span className="absolute bg-sky-900 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
                                                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">Details</span>Details</button>
                                        </Link>
                                    </div>
                                </div>)
                        }
                    </div>
                    :
                    <NoDataDashboard title1=" Dashboard No Data!" title2="Did you know you can Order a Flower" link={`/dashboard/selectItems`} l1="S" l2="E" l3="L" l4="E" l5="C" l6="T" l7="." />
            }
        </div>
    );
};

export default OrderHistory;