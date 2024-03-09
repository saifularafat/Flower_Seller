import { Helmet } from "react-helmet-async"
import userEmailToPayment from "../../../../api/useEmailPayment";

const PaymentHistory = () => {
    const [payments] = userEmailToPayment();
    console.log(payments);
    return (
        <div>
            <Helmet>
                <title>Payment History || Flower Shop </title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-2">
                    <thead>
                        <tr className="bg-[#5d90b4] text-white">
                            <th className="py-3 px-4 text-base text-left border-b">Product Image</th>
                            <th className="py-3 px-4 text-base text-left border-b">Product Name</th>
                            <th className="py-3 px-4 text-base text-left border-b">Price</th>
                            <th className="py-3 px-4 text-base border-b text-end">Transition Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map(pay =>
                                <tr key={pay?._id} className="hover:bg-gray-50 border-b transition duration-300">
                                    <td className="py-4 px-4 flex justify-start">
                                        <img src={pay?.image} alt="table navigate ui" className="h-14 w-14 object-cover bg-gray-300" />
                                    </td>
                                    <td className="py-4 px-6 border-b text-sm font-semibold">{pay?.name}</td>
                                    <td className="py-4 px-6 border-b text-sm font-semibold">{pay?.totalPrice}$</td>
                                    <td className="py-4 px-6 border-b text-end text-sm">
                                        <h2>{pay?.transition_id}</h2>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;