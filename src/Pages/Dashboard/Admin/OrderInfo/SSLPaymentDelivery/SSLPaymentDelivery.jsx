import { Helmet } from "react-helmet-async";
import DataLoading from "../../../../../Share/Loading/DataLoading";
import useTotalPaymentData from "../../../../../api/useTotalPaymentData";

const SSLPaymentDelivery = () => {
    /*  TODO SSLPAYMENT*/
    const [totalPayment, refetch, isLoading] = useTotalPaymentData();
    const sslCommerz = totalPayment.filter(sslPay => sslPay?.paymentType === "SSL CommerZ");

    let amount = 0;
    sslCommerz.forEach(order => {
        amount += parseFloat(order?.totalPrice);
    });
    const totalAmount = amount.toFixed(2);

    if (isLoading) {
        return <DataLoading />
    }
    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>  SSL Payment || Dashboard || Flower Shop </title>
            </Helmet>
            <h3 className="md:text-right pl-2 md:pl-0 text-lg md:text-xl font-semibold md:pb-5 pb-2 uppercase"><span className="md:text-3xl text-2xl">{totalAmount + "$"}</span> TOTAL Amount <span className="text-sm font-medium lowercase">(out Of  {sslCommerz?.length})</span></h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-base">Flower Image</th>
                        <th className="text-base">Flower Name</th>
                        <th className="text-base">Transition Id</th>
                        <th className="text-base">Price</th>
                        <th className="text-base">Pay Status</th>
                    </tr>
                </thead>
                {
                    sslCommerz.map((pay, index) =>
                        <tbody key={pay?._id}>
                            <tr className="hover:bg-slate-50 transition-all duration-200">
                                <th className="text-xs">{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pay?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-xs">{pay?.name ? pay?.name : pay?.orderInfo?.name}</td>
                                <td className="text-xs">{pay?.transition_id ? pay?.transition_id : pay?.paymentType}</td>
                                <td className="text-xs">{pay?.totalPrice ? pay?.totalPrice : pay?.orderInfo?.totalPrice}$</td>
                                <td
                                    className={`${pay?.payStatus === "pending" ? 'text-green-800'
                                        : pay?.orderInfo?.payStatus === "success" ? 'text-sky-900'
                                            : pay?.payStatus ? pay?.payStatus : pay?.orderInfo?.payStatus === "cancel" ? 'text-amber-900'
                                                : pay?.payStatus ? pay?.payStatus : pay?.orderInfo?.payStatus === "retune" ? 'text-red-700'
                                                    : pay?.payStatus === "pending" ? 'text-blue-900'
                                                        : 'text-blue-900'} text-base font-medium`}>{pay?.payStatus ? pay?.payStatus : pay?.orderInfo?.payStatus}</td>
                            </tr>
                        </tbody>)
                }
            </table>
        </div>
    );
};

export default SSLPaymentDelivery;