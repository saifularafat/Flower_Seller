import DataLoading from "../../../../Share/Loading/DataLoading";
import useTotalPaymentData from "../../../../api/useTotalPaymentData";
import BrowserGoalTran from "./BrowserGoalTran/BrowserGoalTran";
import RevenueSecondSection from "./RevenuSection/RevenueSecondSection";
import UpDateMonth from "./UpDateMonth";

const AdminHome = () => {
    const [, , isLoading] = useTotalPaymentData();
    if (isLoading) {
        return <DataLoading />
    }
    return (
        <div>
            <UpDateMonth />
            <RevenueSecondSection />
            <BrowserGoalTran />
        </div>
    );
};

export default AdminHome;