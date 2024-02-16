import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { earningPieChart, orderBarChart, profitLineChart } from '../../../../../AllChartData';

const OrderProfitChart = () => {

    const [bar] = useState(orderBarChart);
    const [line] = useState(profitLineChart);
    const [donut] = useState(earningPieChart);
    return (
        <div className="grid grid-cols-2  text-accent md:grid-cols-4 gap-5">
            <div className={`md:col-span-2 pt-8 pl-6 shadow-lg rounded-xl `}>
                <p className="font-medium text-xl">Orders</p>
                <h2 className="font-bold text-2xl my-2">1.30k</h2>
                <div className="-ml-6 -mt-3 mr-8">
                    <ReactApexChart options={bar.options} series={bar.series} type="bar" height={120} width={'100%'} />
                </div>
            </div>
            <div className={`md:col-span-2 pt-8 pl-6 shadow-lg rounded-xl `}>
                <p className="font-medium text-xl">Profit</p>
                <h2 className="font-bold text-2xl my-2">3.77k</h2>
                <div className="-ml-6 -mt-3 mr-8">
                    <ReactApexChart options={line.options} series={line.series} type="line" height={108} width={'100%'} />
                </div>
            </div>
            <div className={`col-span-4 py-4 pl-6  grid grid-cols-2 shadow-2xl rounded-xl `}>
                <div className='left'>
                    <h2 className='text-2xl font-semibold pb-3'>Earnings</h2>
                    <p className='text-lg font-medium leading-none'>This Month</p>
                    <h2 className='text-base font-medium pb-3'>$5712.27</h2>
                    <p className='text-lg font-bold leading-none'>75.5% <span className='text-sm font-normal text-justify leading-none  lowercase'> more earnings than last three months</span>
                    </p>
                </div>
                <div className='right pt-5'>
                    <ReactApexChart options={donut.options} series={donut.series} type="donut" />
                </div>
            </div>
        </div>
    );
};

export default OrderProfitChart;