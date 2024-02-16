import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { revenueDoubleBarChart } from "../../../../../AllChartData";

const Revenue = () => {
    const [doubleBar] = useState(revenueDoubleBarChart)
    return (
        <div className="md:col-span-2 text-accent border-0 border-r border-solid border-gray-400">
            <div className="flex items-center flex-col sm:flex-row justify-between px-4 py-5">
                <h2 className="text-2xl font-semibold text-accent">Revenue</h2>
                <div className="flex items-center gap-4">
                    <p className="flex items-center gap-2 text-sm text-accent font-medium">
                        <span className="bg-blue-600 rounded-full w-3 h-3"></span>
                        Earning
                    </p>
                    <p className="flex items-center gap-2 text-sm text-accent font-medium">
                        <span className="bg-orange-600 rounded-full w-3 h-3"></span>
                        Expenses
                    </p>
                </div>
            </div>
            <div className="ml-3 mt-2">
                <ReactApexChart options={doubleBar.options} series={doubleBar.series} type="bar" height={270} width={'100%'} />
            </div>
        </div>
    );
};

export default Revenue;