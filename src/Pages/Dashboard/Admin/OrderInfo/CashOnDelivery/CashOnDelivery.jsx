import useTotalPaymentData from "./../../../../../api/useTotalPaymentData.js";
const CashOnDelivery = () => {
    const [totalPayment] = useTotalPaymentData();
    const cashOnDelivery = totalPayment.filter(delivery => delivery.paymentType === "Case On Delivery")
    console.log(cashOnDelivery);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            ##
                        </th>
                        <th>F. image</th>
                        <th>F. Name</th>
                        <th>Users</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    cashOnDelivery.map((delivery, index) =>
                        <tbody key={delivery?._id}>
                            <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={delivery?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{delivery?.name}</div>
                                        <div className="text-sm opacity-50">{delivery?.paymentType}</div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{delivery?.userName}</div>
                                        <div className="text-sm opacity-50">{delivery?.email}</div>
                                    </div>
                                </td>
                                <td>{delivery?.totalPrice + "$"}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Cancel</button>
                                    <button className="btn btn-ghost btn-xs">Success</button>
                                </th>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default CashOnDelivery;