import { Helmet } from "react-helmet-async";
import DashboardTitle from "../../../../components/DashboardTitle";
import { GiFireFlower } from "react-icons/gi";

const AllPayment = () => {
    return (
        <div>
            <Helmet>
                <title>Flower Shop || All Payment </title>
            </Helmet>
            <DashboardTitle  borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-3/12" Icon={GiFireFlower} textColor="" title="All Payment "/>
            <div className="overflow-x-auto pt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Transition</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>emial@gmail.com</td>
                            <td>123cvfgrtjuierh334456098cnv</td>
                            <td className="text-sm font-semibold">635$</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPayment;