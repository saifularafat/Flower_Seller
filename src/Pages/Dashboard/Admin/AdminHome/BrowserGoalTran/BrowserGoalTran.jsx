import { BiDotsVertical } from "react-icons/bi";
import {browserRadialBarChart} from "../../../../../AllChartData"
import BrowserCart from "../../../../../components/BrowserCart";
import chrome from "../../../../../assets/browser/chrome.png";
import firefox from '../../../../../assets/browser/firefox.png';
import safari from '../../../../../assets/browser/safari.png';
import mini from '../../../../../assets/browser/mini.png';
import explorer from '../../../../../assets/browser/explorer.png';
import GlobalChart from "./GlobalChart";
import TransitionSystem from "./Transitionsystem";
const BrowserGoalTran = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 my-3">
            <div className={`text-accent col-span-2 py-5 px-3 shadow-xl rounded-lg overflow-hidden`}>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-medium text-accent leading-none">Browser States</h3>
                        <p className="text-sm font-normal normal-case text-accent">Counter January 2022</p>
                    </div>
                    <BiDotsVertical className="text-lg" />
                </div>
                <div className="pt-5 space-y-5">
                    <BrowserCart image={chrome} title="Google Chrome" percent="51%" settings={{ series: browserRadialBarChart.series1, options: { ...browserRadialBarChart.options, colors: browserRadialBarChart.options.colors1 } }} />
                    <BrowserCart image={firefox} title="FireFox" percent="17.3%" settings={{ series: browserRadialBarChart.series2, options: { ...browserRadialBarChart.options, colors: browserRadialBarChart.options.colors2 } }} />
                    <BrowserCart image={safari} title="Safari" percent="12.4%" settings={{ series: browserRadialBarChart.series3, options: { ...browserRadialBarChart.options, colors: browserRadialBarChart.options.colors3 } }} />
                    <BrowserCart image={mini} title="Mini" percent="11.2%" settings={{ series: browserRadialBarChart.series4, options: { ...browserRadialBarChart.options, colors: browserRadialBarChart.options.colors4 } }} />
                    <BrowserCart image={explorer} title="Internet Explorer" percent="8.1%" settings={{ series: browserRadialBarChart.series5, options: { ...browserRadialBarChart.options, colors: browserRadialBarChart.options.colors5 } }} />
                </div>
            </div>
            <div className={`text-accent col-span-2 py-5 px-3 shadow-xl rounded-lg`}>
                <GlobalChart />
            </div>
            <div className={`text-accent col-span-2 py-5 px-3 shadow-xl rounded-lg`}>
                <TransitionSystem />
            </div>
        </div>
    );
};

export default BrowserGoalTran;