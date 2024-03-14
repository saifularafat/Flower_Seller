import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../components/DashboardTitle";
import { GiFireFlower } from "react-icons/gi";
import DataLoading from "../../../../Share/Loading/DataLoading";
import useTotalPaymentData from "../../../../api/useTotalPaymentData";
import Swal from "sweetalert2";
import useAuth from "../../../../api/useAuth";
import axios from "axios";

const AllPayment = () => {
    const { user } = useAuth();
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

    const handleStatusChange = status => {
        console.log("Change the Status");
        Swal.fire({
            title: 'Are you sure?',
            text: "Your Client Payment Success!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#173931',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes.!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/payment/admin/${status?._id}`, {
                    method: 'PATCH',
                    headers: { authorization: `bearer ${localStorage.getItem('token_access')}` }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("serial number 46 =>", data);
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Payment!',
                                `${user?.name} is an Admin Now!!`,
                                'success'
                            )
                        }
                    })
            }
        })

    }
    const handleAdminDeletePay = (pay) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You Client Payment Delete by Admin!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`${import.meta.env.VITE_API_URL}/payment/admin/cancel/${pay._id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Wronging!',
                                'Pay Admin Delete .',
                                'success'
                            )
                        }
                    })
            }
        })
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
                                {
                                    pay?.payStatus === "adminDelete" ?
                                        <></>
                                        :
                                        <>
                                            {
                                                pay?.payStatus === "cancel" ?

                                                    <tr className="bg-red-200">
                                                        <th>{index + 1}</th>
                                                        <td>{pay?.email}</td>
                                                        <td>{pay?.paymentType}</td>
                                                        <td>{pay?.name}</td>
                                                        <td>{pay?.totalPrice + "$"}</td>
                                                        {
                                                            pay?.payStatus === "cancel" ?
                                                                <td>{pay?.cancelType}</td>
                                                                :
                                                                <td>{pay?.transition_id}</td>
                                                        }
                                                        {
                                                            pay?.payStatus === "cancel" && <p className="disabled text-center text-sm p-1 bg-red-500 text-white tracking-wide capitalize rounded-md">Cancel</p>
                                                        }
                                                    </tr>
                                                    :
                                                    <tr>
                                                        <th>{index + 1}</th>
                                                        <td>{pay?.email}</td>
                                                        <td>{pay?.paymentType}</td>
                                                        <td>{pay?.name}</td>
                                                        <td>{pay?.totalPrice + "$"}</td>
                                                        {
                                                            pay?.payStatus === "cancel" ?
                                                                <td>{pay?.cancelType}</td>
                                                                :
                                                                <td>{pay?.transition_id}</td>
                                                        }
                                                        {
                                                            pay?.payStatus === "success" ?
                                                                <p className="disabled text-center text-sm p-1 bg-blue-300 text-white tracking-wide capitalize rounded-md">success</p>
                                                                :
                                                                pay?.payStatus === "cancel" ?
                                                                    <p className="disabled text-center text-sm p-1 bg-red-600 text-white tracking-wide capitalize rounded-md">Cancel</p>
                                                                    :
                                                                    < div >
                                                                        {/* TODO ACTION */}
                                                                        <button onClick={() => handleStatusChange(pay)} className="px-2 py-1 rounded-md bg-green-400 text-xs font-medium capitalize text-white">{pay?.payStatus}</button>
                                                                        <button onClick={() => handleAdminDeletePay(pay)} className="px-2 py-1 rounded-md bg-red-700 text-xs text-white font-medium capitalize ml-1">Cancel</button>
                                                                    </div>
                                                        }
                                                    </tr>
                                            }
                                        </>
                                }
                            </tbody>)
                    }
                </table>
            </div>
        </div >
    );
};

export default AllPayment;