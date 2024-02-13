import useTotalPaymentData from "./../../../../../api/useTotalPaymentData.js";
const CashOnDelivery = () => {
    const [totalPayment] = useTotalPaymentData();
    const cashOnDelivery = totalPayment.filter(delivery => delivery.paymentType === "Case On Delivery")
    console.log(cashOnDelivery);

    return (
        <div className="overflow-x-auto">
            <h2 className="text-base md:text-lg font-medium md:font-semibold">Payment : {cashOnDelivery?.length}</h2>
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
                                        <div className="md:font-bold md:text-sm text-xs">{delivery?.name}</div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="md:text-sm text-xs opacity-50">{delivery?.email}</div>
                                    </div>
                                </td>
                                <td className="text-xs md:text-base">{delivery?.totalPrice + "$"}</td>
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