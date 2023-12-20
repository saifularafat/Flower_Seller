import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../components/DashboardTitle";
import { PiFlowerLotusBold } from "react-icons/pi";

const AllUsers = () => {
    return (
        <>
            <Helmet>
                <title> Flower Shop || All Users</title>
            </Helmet>
            <DashboardTitle borderColor=" border-slate-900" borderStyle="border-dashed" borderWidth="w-1/5" textColor=" text-slate-600" Icon={PiFlowerLotusBold} title="All Users"></DashboardTitle>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>*</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Grnder</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover:bg-slate-200 transition-all duration-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover:bg-slate-200 transition-all duration-200">
                            <th>2</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover:bg-slate-200 transition-all duration-200">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover:bg-slate-200 transition-all duration-200">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;