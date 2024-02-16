import PaymentInfoCart from "../../../../../components/PaymentInfoCart";
import { BiDotsVertical } from "react-icons/bi";
import { BsCheckLg, BsChevronDoubleDown } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import useTotalPaymentData from "../../../../../api/useTotalPaymentData";

const TransitionSystem = () => {
    const [totalPayment] = useTotalPaymentData();
    console.log(totalPayment);
    const stripePayment = totalPayment.filter(succPay => succPay?.paymentType === "stripe");
    const sslCommerzPayment = totalPayment.filter(penPay => penPay?.paymentType === "SSL CommerZ");
    const cashOnPayment = totalPayment.filter(penPay => penPay?.paymentType === "Case On Delivery");

    let stripeAmount = 0;
    stripePayment.forEach(order => {
        stripeAmount += parseFloat(order?.totalPrice);
    });
    const stripe = (stripeAmount * stripePayment?.length / 100).toFixed(2);

    let sslAmount = 0;
    sslCommerzPayment.forEach(order => {
        sslAmount += parseFloat(order?.totalPrice);
    });
    const sslCommerZ = (sslAmount * sslCommerzPayment?.length / 100).toFixed(2);

    let cashAmount = 0;
    cashOnPayment.forEach(order => {
        cashAmount += parseFloat(order?.totalPrice);
    });
    const cashOn = (cashAmount * cashOnPayment?.length / 100).toFixed(2);

    return (
        <>
            <div className="flex items-center justify-between px-2">
                <h2 className="text-lg font-medium tracking-wide">Transactions</h2>
                <BiDotsVertical className="text-lg" />
            </div>
            <div className="mt-1 py-2 md:py-0 text-">
                <PaymentInfoCart Icon={BsChevronDoubleDown} bgColor="bg-blue-200" color="text-blue-600" title="Wallet" subTitle="Starbucks" textColor="text-red-400" amount='-$77' />
                <PaymentInfoCart Icon={BsCheckLg} bgColor="bg-slate-300" color="text-slate-600" title="Bank Transfer" subTitle="Add Money" textColor="text-green-400" amount='+$337' />
                <PaymentInfoCart Icon={FaHandHoldingUsd} bgColor="bg-orange-200" color="text-orange-700" title="SSL Commerz" subTitle="Add Money" textColor="text-green-400" amount={"+$" + sslCommerZ} />
                <PaymentInfoCart Icon={MdOutlinePayment} bgColor="bg-sky-200" color="text-sky-700" title="Stripe" subTitle="Ordered Product" textColor="text-red-400" amount={"+$" + stripe} />
                <PaymentInfoCart Icon={AiOutlineRise} bgColor="bg-blue-200" color="text-green-500" title="Cash" subTitle="Refund" textColor="text-green-400" amount={"+$" + cashOn} />
            </div>
        </>
    );
};

export default TransitionSystem;