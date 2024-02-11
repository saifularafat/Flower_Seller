import { Helmet } from "react-helmet-async";
import MyOrderInfo from "./MyOrderInfo";
import userEmailToPayment from "../../api/useEmailPayment";
import MyOrderLeft from "./MyOrderLeft";
import useTotalPaymentData from "../../api/useTotalPaymentData";
import useAuth from "../../api/useAuth";



const MyOrder = () => {
const {user} = useAuth();
    const [payments] = userEmailToPayment();
    // const emailPay = payments.filter(pay => (pay?.orderInfo?.payStatus === "pending" || pay?.payStatus === "pending") ||
    // (pay?.orderInfo?.payStatus === "success" || pay?.payStatus === "success"))

    // const [totalPayment, refetch] = useTotalPaymentData();
    // const orderInfo = totalPayment.filter((orLength) => (orLength?.orderInfo?.payStatus === "pending" || orLength?.payStatus === "pending") ||
    //     (orLength?.orderInfo?.payStatus === "success" || orLength?.payStatus === "success"));
    // const orderAndUserInfo = orderInfo.filter(orderFilter => orderFilter?.orderInfo?.email || orderFilter?.email === user?.email)
    console.log("filter", payments);

    return (
        <div className=" grid grid-cols-6 gap-5 overflow-y-scroll myScroll h-screen">
            <Helmet>
                <title>My Order || Flower Shop </title>
            </Helmet>
            <MyOrderLeft />
            <div className="col-span-5 md:space-y-5 md:py-7 py-3 ">
                <MyOrderInfo orderInfo={payments} />
            </div>
        </div>
    );
};

export default MyOrder;