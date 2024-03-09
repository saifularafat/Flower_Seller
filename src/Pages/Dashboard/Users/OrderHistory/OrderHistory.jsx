import { Helmet } from "react-helmet-async";
import userEmailToPayment from "../../../../api/useEmailPayment";
import NoDataDashboard from "../../../../components/NoDataDashboard";

const OrderHistory = () => {
    const [payments, refetch] = userEmailToPayment();
    console.log(payments);
    return (
        <div>
            <Helmet>
                <title>Flower Shop || Order History </title>
            </Helmet>

            {
                payments?.length > 0 ?
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-3 md:py-0 my-3">
                        <div className="px-2 py-4 shadow-lg font-sans rounded-xl space-y-2 h-auto bg-white">
                            <div className="flex w-full h-32 lg:h-[200px] relative">
                                <img className="rounded-lg bg-black/40 w-full h-full" src="https://source.unsplash.com/300x300/?macbook" alt="order flower" />
                            </div>
                            <div className=" font-semibold space-y-1 ">
                                <p className="text-gray-900 text-xs md:text-sm font-medium"> <span className="text-base capitalize font-bold pr-1">Flower Name: </span>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                <p className="text-gray-900 text-xs md:text-sm font-medium"> <span className="text-base capitalize font-bold pr-1">Price: </span>....$</p>
                                <p className="text-gray-900 text-xs md:text-sm font-medium lowercase"> <span className="text-base capitalize font-bold pr-1">Transition Id: </span>Macbook Air</p>
                            </div>
                            <div className="flex items-center justify-center text-sm md:text-base">
                                <button className="px-4 py-2 rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Details</button>
                            </div>
                        </div>
                    </div>
                    :
                    <NoDataDashboard title1=" Dashboard No Data!" title2="Did you know you can Order a Flower" link={`/dashboard/selectItems`} l1="S" l2="E" l3="L" l4="E" l5="C" l6="T" l7="." />
            }
        </div>
    );
};

export default OrderHistory;