import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../components/DashboardTitle";
import { PiFlowerLotusBold } from "react-icons/pi";

const AllUsers = () => {
    return (
        <>
            <Helmet>
                <title> Flower Shop || All Users</title>
            </Helmet>
            <DashboardTitle borderColor=" border-slate-900" borderStyle="border-dashed" borderWidth="md:w-1/5" textColor=" text-slate-600" Icon={PiFlowerLotusBold} title="All Users"></DashboardTitle>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>*</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover:bg-slate-200 transition-all duration-200">
                            <th>1</th>
                            <td className="text-xs">Cy Ganderton</td>
                            <td className="text-xs lowercase">Quality Control Specialist</td>
                            <td className="text-xs">Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover:bg-slate-200 transition-all duration-200">
                            <th>2</th>
                            <td className="text-xs">Brice Swyre</td>
                            <td className="text-xs">Tax Accountant</td>
                            <td className="text-xs">Red</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover:bg-slate-200 transition-all duration-200">
                            <th>3</th>
                            <td className="text-xs">Brice Swyre</td>
                            <td className="text-xs">Tax Accountant</td>
                            <td className="text-xs">Red</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover:bg-slate-200 transition-all duration-200">
                            <th>3</th>
                            <td className="text-xs">Brice Swyre</td>
                            <td className="text-xs">Tax Accountant</td>
                            <td className="text-xs">Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;