import { useState } from "react";
import { globalAngleChart } from "../../../../../AllChartData";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ReactApexChart from "react-apexcharts";
import useTotalPaymentData from "../../../../../api/useTotalPaymentData";

const GlobalChart = () => {
    const [radialBar] = useState(globalAngleChart)
    const [question, setQuestion] = useState(false);

    const [totalPayment] = useTotalPaymentData();
    const successPayment = totalPayment.filter(succPay => succPay?.payStatus === "success");
    const pendingPayment = totalPayment.filter(penPay => penPay?.payStatus === "pending");

    let conformAmount = 0;
    successPayment.forEach(order => {
        conformAmount += parseFloat(order?.totalPrice);
    });
    let PendingAmount = 0;
    pendingPayment.forEach(order => {
        PendingAmount += parseFloat(order?.totalPrice);
    });
    return (
        <>
            <div className="flex items-center justify-between text-accent px-2">
                <h3 className="text-lg font-medium tracking-wide">Goal Overview</h3>
                <AiOutlineQuestionCircle
                    onClick={() => setQuestion(!question)}
                    className="w-5 h-5 cursor-pointer" />
                {
                    !question ? '' : <span className="text-xs">This is question </span>
                }
            </div>
            <div className="py-4 flex items-center justify-center">
                <ReactApexChart options={radialBar.options} series={radialBar.series} type="radialBar" height={200} width={180} />
            </div>
            <div className="flex border-0 border-t border-solid border-gray-200">
                <div className="w-1/2 pt-3 border-0 border-r border-solid border-slate-400 text-center">
                    <p className="font-medium text-sm">Completed</p>
                    <h3 className="font-semibold text-xl">{conformAmount + "$"}</h3>
                </div>
                <div className="text-center text-accent w-1/2 pt-3">
                    <p className="font-medium text-sm">In Progress</p>
                    <h3 className="font-semibold text-xl">{PendingAmount + "$"}</h3>
                </div>
            </div>
        </>
    );
};

export default GlobalChart;