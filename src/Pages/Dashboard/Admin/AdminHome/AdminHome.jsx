import BrowserGoalTran from "./BrowserGoalTran/BrowserGoalTran";
import RevenueSecondSection from "./RevenuSection/RevenueSecondSection";
import UpDateMonth from "./UpDateMonth";

const AdminHome = () => {
    return (
        <div>
            <UpDateMonth />
            <RevenueSecondSection />
            <BrowserGoalTran />
        </div>
    );
};

export default AdminHome;