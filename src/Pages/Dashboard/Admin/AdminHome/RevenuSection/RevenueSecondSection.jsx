import OrderProfitChart from "./OrderProfitChart";
import Revenue from "./Revenue";
import RightRevenue from "./RightRevenue";

const RevenueSecondSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
                <OrderProfitChart />

                <div className={`md:col-span-2 shadow-xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3`}>
                    <Revenue />
                    <RightRevenue />
                </div>
            </div>
    );
};

export default RevenueSecondSection;