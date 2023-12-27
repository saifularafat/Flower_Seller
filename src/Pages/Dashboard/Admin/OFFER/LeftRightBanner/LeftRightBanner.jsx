import { Helmet } from "react-helmet-async";
import { LuFlower2 } from "react-icons/lu";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { Link } from "react-router-dom";

const LeftRightBanner = () => {
    return (
        <div>
            <Helmet><title>Flower Shop || Left & Right image Change</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-4/12" Icon={LuFlower2} fileColor="" title=" Left & Right Image " />
        
            <div className="overflow-x-auto md:py-8 py-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> image</th>
                            <th>image serial </th>
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
                            <td>LeftRight Image One</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/leftRightBanner/leftRightBannerOne" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
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
                            <td>LeftRight Image Two</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/leftRightBanner/leftRightBannerTwo" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
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
                            <td>LeftRight Image Three</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/leftRightBanner/leftRightBannerThree" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
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
                            <td>LeftRight Image Four</td>
                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Link to="/dashboard/leftRightBanner/leftRightBannerFour" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
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

export default LeftRightBanner;