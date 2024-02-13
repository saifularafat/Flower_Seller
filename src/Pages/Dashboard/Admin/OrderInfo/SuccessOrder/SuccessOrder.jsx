import DataLoading from "../../../../../Share/Loading/DataLoading";
import useTotalPaymentData from "../../../../../api/useTotalPaymentData";

const SuccessOrder = () => {
    const [totalPayment, refetch, isLoading] = useTotalPaymentData();
    const successCommerz = totalPayment.filter(sslPay => sslPay?.payStatus === "success");

    let amount = 0;
    successCommerz.forEach(order => {
        amount += parseFloat(order?.totalPrice);
    });
    const totalAmount = amount.toFixed(2);

    if (isLoading) {
        return <DataLoading />
    }

    return (
        <div className="overflow-x-auto">
            <h3 className="md:text-right pl-2 md:pl-0 text-lg md:text-xl font-semibold md:pb-5 pb-2 uppercase"><span className="md:text-3xl text-2xl">{totalAmount}</span> TOTAL Amount <span className="text-sm font-medium lowercase">out Of </span> {successCommerz?.length}</h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-base">Flower Image</th>
                        <th className="text-base">Flower Name</th>
                        <th className="text-base">Transition Id</th>
                        <th className="text-base">Price</th>
                        <th className="text-base">Pay Status</th>
                    </tr>
                </thead>
                {
                    successCommerz.map((pay, index) =>
                        <tbody key={pay?._id}>
                            <tr className="hover:bg-slate-50 transition-all duration-200">
                                <th className="text-xs">{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pay?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-xs">{pay?.name ? pay?.name : pay?.orderInfo?.name}</td>
                                <td className="text-xs">{pay?.transition_id ? pay?.transition_id : pay?.paymentType}</td>
                                <td className="text-xs">{pay?.totalPrice ? pay?.totalPrice : pay?.orderInfo?.totalPrice}$</td>
                                <td
                                    className={`${pay?.payStatus === "pending" ? 'text-green-800'
                                        : pay?.orderInfo?.payStatus === "success" ? 'text-sky-900'
                                            : pay?.payStatus ? pay?.payStatus : pay?.orderInfo?.payStatus === "cancel" ? 'text-amber-900'
                                                : pay?.payStatus ? pay?.payStatus : pay?.orderInfo?.payStatus === "retune" ? 'text-red-700'
                                                    : pay?.payStatus === "pending" ? 'text-blue-900'
                                                        : 'text-blue-900'} text-base font-medium`}>{pay?.payStatus ? pay?.payStatus : pay?.orderInfo?.payStatus}</td>
                            </tr>
                        </tbody>)
                }
            </table>
        </div>
    );
};

export default SuccessOrder;


[
    {
        PhoneNumber: "1122334464",
        charge: "15.22",
        currentAddress: "Shudagorpara, Banasua",
        date: "2024-02-11T18:25:52.170Z",
        duration: "Delivery Duration Time is 7 Day!",
        email: "sul.tan@gmail.com",
        image: "https://i.ibb.co/M1ZkZRK/190606sx.webp",
        name: "Magnificent Roses Preserved I Love You",
        paidStatus: true,
        payStatus: "success",
        paymentType: "SSL CommerZ",
        price: "169.10",
        totalPrice: "185.42",
        transition_id: "65c910939034bff15b4062b1",
        userName: "Sultan",
        _id: "65c911309034bff15b4062b2",
    },
    {
        PhoneNumber: "012589634",
        charge: "6.58",
        currentAddress: "mirpur, Dhaka",
        date: "2024-02-11T18:29:25.439Z",
        duration: "Delivery Duration Time is 7 Day!",
        email: "sul.tan@gmail.com",
        image: "https://i.ibb.co/KFfNVQh/Happy-Birthday-Sweets-Gift-Basket.webp",
        name: "Happy Birthday Sweets Gift Basket",
        paidStatus: true,
        payStatus: "success",
        paymentType: "SSL CommerZ",
        price: "73.10",
        totalPrice: "80.78",
        transition_id: "65c9116e70e141bd4528c259",
        userName: "Sultan",
        _id: "65c9120570e141bd4528c25a"
    }
]
