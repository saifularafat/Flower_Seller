import { Helmet } from "react-helmet-async";
import { LuFlower2 } from "react-icons/lu";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import useLeftRightBannerGet from "../../../../../api/useLeftRightBannerGet";
import Swal from "sweetalert2";
import axios from "axios";

const LeftRightBanner = () => {
    const [leftRightBGet, refetch] = useLeftRightBannerGet();
    const leftOne = leftRightBGet.find(leftOne => leftOne.category === "leftOne")
    const rightOne = leftRightBGet.find(rightOne => rightOne.category === "rightOne")
    const leftTwo = leftRightBGet.find(leftTwo => leftTwo.category === "leftTwo")
    const rightTwo = leftRightBGet.find(rightTwo => rightTwo.category === "rightTwo")
    
    const handleDeleted = (leftRightBGet) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be Select Slider delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log("Click is Done!", result);
            if (result.isConfirmed) {
                //     // axios.delete(`${import.meta.env.VITE_API_URL}/leftRightImage/${banner._id}`)
                axios.delete(`http://localhost:4000/leftRightImage/${leftRightBGet?._id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your l. R. Banner has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet><title>Flower Shop || Left & Right image Change</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-4/12" Icon={LuFlower2} fileColor="" title=" Left & Right Image " />
            <Marquee className="py-3 w-1/2 bg-slate-200 mt-2">
                Please first Post Button click, and agin post after post delete then agin post Button Click then post and return a post .
            </Marquee>
            <div className="overflow-x-auto md:py-8 py-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> image</th>
                            <th>image serial </th>
                            <th>Content </th>
                            <th>Link </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16- h-16">
                                            <img src={leftOne?.leftRightImage} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{leftOne?.LeftRightSerial}</td>
                            <td>{leftOne?.leftRightContent}</td>
                            <td>{leftOne?.leftRightLink}</td>
                            {
                                leftOne ?
                                    <div className="flex items-center gap-1 mt-4">
                                        <div>
                                            <button className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/leftRightBanner/leftRightBannerEdit/${leftOne?._id}`} className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDeleted(leftOne)} className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center gap-1 mt-4">
                                        <div>
                                            <Link to="/dashboard/leftRightBanner/leftRightBannerOne" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                        <div>
                                            <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                            }
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16- h-16">
                                            <img src={rightOne?.leftRightImage} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{rightOne?.LeftRightSerial}</td>
                            <td>{rightOne?.leftRightContent}</td>
                            <td>{rightOne?.leftRightLink}</td>
                            {
                                rightOne ?
                                    <div className="flex items-center gap-1 mt-4">
                                        <div>
                                            <button className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/leftRightBanner/leftRightBannerEdit/${rightOne?._id}`} className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDeleted(rightOne)} className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center gap-1 mt-4">
                                        <div>
                                            <Link to="/dashboard/leftRightBanner/leftRightBannerTwo" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                        <div>
                                            <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                            }
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16- h-16">
                                            <img src={leftTwo?.leftRightImage} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{leftTwo?.LeftRightSerial}</td>
                            <td>{leftTwo?.leftRightContent}</td>
                            <td>{leftTwo?.leftRightLink}</td>
                            {
                                leftTwo ?
                                    <div className="flex items-center gap-1 mt-4">
                                        <div>
                                            <button className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/leftRightBanner/leftRightBannerEdit/${leftTwo?._id}`} className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDeleted(leftTwo)} className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center gap-1 mt-4">
                                        <div>
                                            <Link to="/dashboard/leftRightBanner/leftRightBannerThree" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                        <div>
                                            <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                            }
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16- h-16">
                                            <img src={rightTwo?.leftRightImage} alt="flower" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{rightTwo?.LeftRightSerial}</td>
                            <td>{rightTwo?.leftRightContent}</td>
                            <td>{rightTwo?.leftRightLink}</td>
                            {
                                rightTwo ?
                                    <div className="flex items-center gap-1 mt-4">
                                        <div>
                                            <button className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/leftRightBanner/leftRightBannerEdit/${rightTwo?._id}`} className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDeleted(rightTwo)} className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center gap-1 mt-4">
                                        <div>
                                            <Link to="/dashboard/leftRightBanner/leftRightBannerFour" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                        <div>
                                            <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                            }
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeftRightBanner;