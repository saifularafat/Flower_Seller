import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../components/DashboardTitle";
import { GiFireFlower } from "react-icons/gi";
import DataLoading from "../../../../Share/Loading/DataLoading";
import useTotalPaymentData from "../../../../api/useTotalPaymentData";

const AllPayment = () => {
    const [totalPayment, refetch, isLoading] = useTotalPaymentData();
    if (isLoading) {
        return <DataLoading />
    }
    console.log(totalPayment);

    const handleStatusChange = () => {
        console.log("Change the Status");
    }
    const handleDeletePay = (pay) => {
        console.log("handle Delete Pay", (pay?._id));
    }
    return (
        <div>
            <Helmet>
                <title>Flower Shop || All Payment </title>
            </Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-3/12" Icon={GiFireFlower} textColor="" title="All Payment " />
            {/* TODO TOTAL AMOUNT */}
            {/* <h2>{}</h2> */}
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