import { Helmet } from "react-helmet-async";
import { GiButterflyFlower } from "react-icons/gi";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { Link } from "react-router-dom";

const BannerChange = () => {
    return (
        <div>
            <Helmet><title>Flower Shop || Banner Change</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-4/12" Icon={GiButterflyFlower} fileColor="" title="Upload Banner Image " />
            <div className="overflow-x-auto md:py-8 py-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Banner img1</th>
                            <th>Banner image serial </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="" alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Banner Image One</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/bannerChanges/bannerOne" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                       
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="" alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Banner Image Two</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/bannerChanges/bannerTwo" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                </div>
                                <div>
                                    <button className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                </div>
                            </div>
                        </tr>
                       
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="" alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Banner Image Three</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/bannerChanges/bannerThree" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
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

export default BannerChange;