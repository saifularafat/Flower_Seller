import { Helmet } from "react-helmet-async";
import MyOrderInfo from "./MyOrderInfo";
import userEmailToPayment from "../../api/useEmailPayment";
import MyOrderLeft from "./MyOrderLeft";



const MyOrder = () => {
    const [payments] = userEmailToPayment();


    return (
        <div className="md:grid grid-cols-6 gap-5 overflow-y-scroll myScroll h-screen">
            <Helmet>
                <title>My Order || Flower Shop </title>
            </Helmet>
            <MyOrderLeft />
            <div className="md:col-span-5 w-full md:space-y-5 md:py-7 py-3 ">
                <MyOrderInfo orderInfo={payments} />
            </div>
        </div>
    );
};

export default MyOrder;