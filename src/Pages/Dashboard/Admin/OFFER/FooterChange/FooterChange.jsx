import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { GiLotusFlower } from "react-icons/gi";
import { Link } from "react-router-dom";

const FooterChange = () => {
    // const {
    //     register,
    //     handleSubmit,
    // } = useForm()
    // const onSubmit = (data) => console.log(data)
    return (
        <div>
            <Helmet><title>Flower Shop || Best Offer</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-3/12" Icon={GiLotusFlower} textColor="" title="Footer" />
            <div className="overflow-x-auto md:py-8 py-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Footer Title</th>
                            <th>Category </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                               Way Shop
                            </td>
                            <td>Category</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/footerChange/footerWayToShop" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>

                        <tr>
                            <td>
                               Custom Service
                            </td>
                            <td>Category</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/footerChange/footerCustomService" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <td>
                               Our Stores
                            </td>
                            <td>Category</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/footerChange/footerOurStores" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <td>
                               Corporate
                            </td>
                            <td>Category</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/footerChange/footerCorporate" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FooterChange;