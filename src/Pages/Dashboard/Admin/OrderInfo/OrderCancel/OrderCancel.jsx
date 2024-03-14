import { Helmet } from "react-helmet-async";
import DataLoading from "../../../../../Share/Loading/DataLoading";
import useTotalPaymentData from "../../../../../api/useTotalPaymentData";

const OrderCancel = () => {
    const [totalPayment, , isLoading] = useTotalPaymentData();
    const cancelPay = totalPayment.filter(cancel => cancel?.payStatus === "cancel");
    console.log(cancelPay);
    let amount = 0;
    cancelPay.forEach(order => {
        amount += parseFloat(order?.totalPrice);
    });
    const totalAmount = amount.toFixed(2);

    if (isLoading) {
        return <DataLoading />
    }
    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>All Cancel Pay || Flower Shop </title>
            </Helmet>
            <h3 className="md:text-right pl-2 md:pl-0 text-lg md:text-xl font-semibold md:pb-5 pb-2 uppercase"><span className="md:text-3xl text-2xl">{totalAmount + "$"}</span> TOTAL Cancel Amount <span className="text-sm font-medium lowercase">out Of </span> {cancelPay?.length}</h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-base font-semibold">##</th>
                        <td className="text-base font-semibold">Email</td>
                        <td className="text-base font-semibold">Pay Type</td>
                        <td className="text-base font-semibold">Flower Name</td>
                        <td className="text-base font-semibold">Amount</td>
                        <td className="text-base font-semibold">Transition ID</td>
                        <td className="text-base font-semibold">Action</td>
                    </tr>
                </thead>
                {
                    totalPayment.map((pay, index) =>
                        <tbody key={pay?._id}>
                            {
                                pay?.payStatus === "cancel" &&
                                <tr className="bg-red-200">
                                    <th>{index + 1}</th>
                                    <td>{pay?.email}</td>
                                    <td>{pay?.paymentType}</td>
                                    <td>{pay?.name}</td>
                                    <td>{pay?.totalPrice + "$"}</td>
                                    <td>{pay?.transition_id ? pay?.transition_id : pay?.cancelType}</td> <p className="disabled text-center text-sm p-1 bg-red-600 text-white tracking-wide capitalize rounded-md">{pay?.payStatus}</p>
                                </tr>
                            }
                        </tbody>)
                }
            </table>
        </div>
    );
};

export default OrderCancel;