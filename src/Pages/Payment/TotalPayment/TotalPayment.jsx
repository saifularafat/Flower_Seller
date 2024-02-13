import useTotalPaymentData from "../../../api/useTotalPaymentData";

const TotalPayment = () => {
    const [totalPayment] = useTotalPaymentData();
    console.log(totalPayment);
    return (
        <div className="overflow-x-auto">
            <h3 className="text-right text-xl md:text-2xl font-semibold pb-5"><span className="md:text-3xl text-2xl">{totalPayment?.length}</span> TOTAL PAYMENT</h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-base">Flower Name</th>
                        <th className="text-base">Transition Id</th>
                        <th className="text-base">Price</th>
                        <th className="text-base">Pay Status</th>
                    </tr>
                </thead>
                {
                    totalPayment.map((pay, index) =>
                        <tbody key={pay?._id}>
                            <tr className="hover:bg-slate-50 transition-all duration-200">
                                <th className="text-xs">{index + 1}</th>
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

export default TotalPayment;