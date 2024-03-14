import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../../components/DashboardTitle";
import useTotalPaymentData from "../../../../../api/useTotalPaymentData";
import { GiFireFlower } from "react-icons/gi";

const AdminDeleteOrder = () => {
    const [totalPayment, ,] = useTotalPaymentData();
    const cancelPay = totalPayment.filter(cancel => cancel?.payStatus === "cancel");

    let pAmount = 0;
    cancelPay.forEach(order => {
        pAmount += parseFloat(order?.totalPrice);
    });
    const totalPAmount = pAmount.toFixed(2);

    return (
        <div>
            <Helmet>
                <title>Flower Shop || All Payment </title>
            </Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-3/12" Icon={GiFireFlower} textColor="" title="All Payment " />
            {/* TODO TOTAL AMOUNT */}
            <h3 className="md:text-right pl-2 md:pl-0 text-lg md:text-xl font-semibold md:pb-5 pb-2 uppercase"><span className="md:text-3xl text-2xl">{totalPAmount + "$"}</span> TOTAL Cancel Amount </h3>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
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
        </div >
    );
};

export default AdminDeleteOrder;