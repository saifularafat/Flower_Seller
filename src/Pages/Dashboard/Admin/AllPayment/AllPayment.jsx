import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../components/DashboardTitle";
import { GiFireFlower } from "react-icons/gi";
import DataLoading from "../../../../Share/Loading/DataLoading";
import useTotalPaymentData from "../../../../api/useTotalPaymentData";

const AllPayment = () => {
    const [totalPayment, refetch, isLoading] = useTotalPaymentData();
    const pendingPay = totalPayment.filter(pending => pending?.payStatus === "pending");

    /* total Payment */
    let amount = 0;
    totalPayment.forEach(order => {
        amount += parseFloat(order?.totalPrice);
    });
    const totalAmount = amount.toFixed(2);

    /* pending pay */
    let pAmount = 0;
    pendingPay.forEach(order => {
        pAmount += parseFloat(order?.totalPrice);
    });
    const totalPAmount = pAmount.toFixed(2);
    console.log(totalPAmount);

    const handleStatusChange = () => {
        console.log("Change the Status");
    }
    const handleDeletePay = (pay) => {
        console.log("handle Delete Pay", (pay?._id));
    }

    if (isLoading) {
        return <DataLoading />
    }
    return (
        <div>
            <Helmet>
                <title>Flower Shop || All Payment </title>
            </Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-3/12" Icon={GiFireFlower} textColor="" title="All Payment " />
            {/* TODO TOTAL AMOUNT */}
            <h3 className="md:text-right pl-2 md:pl-0 text-lg md:text-xl font-semibold md:pb-5 pb-2 uppercase"><span className="md:text-3xl text-2xl">{totalAmount + "$"}</span> TOTAL Amount <span className="text-xs">(pending pay: {totalPAmount + "$"})</span></h3>
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
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{pay?.email}</td>
                                    <td>{pay?.paymentType}</td>
                                    <td>{pay?.name}</td>
                                    <td>{pay?.totalPrice + "$"}</td>
                                    <td>{pay?.transition_id}</td>
                                    {
                                        pay?.payStatus === "success" ? <p className="disabled text-center text-sm p-1 bg-blue-300 text-white tracking-wide capitalize rounded-md">success</p> : <>
                                            {/* TODO ACTION */}
                                            <div>
                                                <button onClick={() => handleStatusChange(pay)} className="px-2 py-1 rounded-md bg-green-400 text-xs font-medium capitalize text-white">{pay?.payStatus}</button>
                                                <button onClick={() => handleDeletePay(pay)} className="px-2 py-1 rounded-md bg-red-400 text-xs font-medium capitalize ml-1">Delete</button>
                                            </div>
                                        </>
                                    }
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllPayment;