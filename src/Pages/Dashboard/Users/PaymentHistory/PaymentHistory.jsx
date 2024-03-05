import { Helmet } from "react-helmet-async"

const PaymentHistory = () => {
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
                        <tr className="hover:bg-gray-50 border-b transition duration-300">
                            <td className="py-4 px-4 flex justify-start">
                                <img src="https://source.unsplash.com/64x64/?phone" alt="table navigate ui" className="h-14 w-14 object-cover bg-gray-300" />
                            </td>
                            <td className="py-4 px-6 border-b text-base font-semibold">Samsung s22</td>
                            <td className="py-4 px-6 border-b text-base font-semibold">$599.99</td>
                            <td className="py-4 px-6 border-b text-end text-base">
                               <h2>sdfdkfngvdjkb</h2>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;