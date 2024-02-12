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
    return (
        <div>
            <Helmet>
                <title>Flower Shop || All Payment </title>
            </Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-3/12" Icon={GiFireFlower} textColor="" title="All Payment " />
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
                                        pay?.payStatus === "success" ? <p className="text-center text-sm p-1 bg-blue-400 text-white tracking-wide capitalize rounded-md">success</p> : <>
                                            <div>
                                                <button className="px-2 py-1 rounded-md bg-green-500 text-xs font-medium capitalize text-white">{pay?.payStatus}</button>
                                                <button className="px-2 py-1 rounded-md bg-red-500 text-xs font-medium capitalize ml-1">Delete</button>
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