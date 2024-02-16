import { useRef, useState } from "react";
import { budgetDashesLineChart } from "../../../../../AllChartData";
import { IoMdArrowDropdown } from "react-icons/io";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

const RightRevenue = () => {
    const [deashLine, setDeashLine] = useState({ series: budgetDashesLineChart.series1, options: budgetDashesLineChart.options });
    const [btnGroup, setBtnGroup] = useState(false);
    const dataIndex = useRef(0);
    const btnRef = useRef();
    const buttonRaf = useRef();

    const selectBtn = (e) => {
        const currentYearRef = e.target.innerText
        btnRef.current.innerText = currentYearRef
        isShowChart(currentYearRef);
    }

    const isShowChart = (year) => {
        switch (year) {
            case "2022":
                setDeashLine(state => ({ ...state, series: budgetDashesLineChart.series1 }))
                break
            case '2021':
                setDeashLine(state => ({ ...state, series: budgetDashesLineChart.series2 }))
                break
            default:
                setDeashLine(state => ({ ...state, series: budgetDashesLineChart.series3 }))
                break
        }
    }

    const isShowBtn = (e) => {
        if (dataIndex.current !== 0) {
            buttonRaf.current.querySelector(".btn_hover").classList.remove("btn_hover")
            buttonRaf.current = 0
        } if (!e.target.classList.contains("groupButton")) {
            setBtnGroup(false)
        } else {
            setBtnGroup(state => !state)
        }
    }



    return (
        <div onClick={isShowBtn} className="py-2 px-3 text-center pt-4">
            <div className="relative inline-block mb-7">
                <button className="text-blue-500 py-[6px] pl-3 pr-3 rounded-xl border border-solid border-blue-500 groupButton flex items-center">
                    <span ref={btnRef} className="text-lg font-medium pr-2 pointer-events-none">2022</span>
                    <IoMdArrowDropdown className="text-2xl" />
                </button>
                <div ref={buttonRaf} className={`${btnGroup ? 'block' : "hidden"} bg-white absolute top-full left-0 w-36 mt-3 z-10 rounded-lg shadow-lg border border-solid border-blue-400 overflow-hidden`}>
                    <button onClick={selectBtn} className=" text-lg font-medium text-slate-700 text-left w-full py-1 px-2 hover:text-blue-500 duration-200 transition-all">2023</button>
                    <button onClick={selectBtn} className=" text-lg font-medium text-slate-700 text-left w-full py-1 px-2 hover:text-blue-500 duration-200 transition-all">2022</button>
                    <button onClick={selectBtn} className=" text-lg font-medium text-slate-700 text-left w-full py-1 px-2 hover:text-blue-500 duration-200 transition-all">2021</button>
                </div>
            </div>
            <h2 className="text-3xl text-accent font-medium">$15,463</h2>
            <p className=" mt-2 text-xl text-accent font-normal"><span className="font-semibold">Budget:</span> 36,632</p>
            <div>
                <ReactApexChart options={deashLine.options} series={deashLine.series} type="line" height={125} width={'100%'} />
            </div>
            <Link to="">
                <button className=" mt-6 w-full py-3 rounded-xl text-white text-lg bg-blue-600 font-semibold shadow-md hover:shadow-blue-500 transition-all duration-200 capitalize">increase budget</button>
            </Link>
        </div>
    );
};

export default RightRevenue;