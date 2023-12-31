import { Helmet } from "react-helmet-async";
import { GiButterflyFlower } from "react-icons/gi";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { Link } from "react-router-dom";
import useBannerGet from "../../../../../api/useBannerGet";
import Swal from "sweetalert2";
import axios from "axios";

const BannerChange = () => {
    const [banners, refetch] = useBannerGet();
    const oneBanner = banners.find(banner => banner.category === "bannerOne");
    const twoBanner = banners.find(banner => banner.category === "bannerTwo");
    const threeBanner = banners.find(banner => banner.category === "bannerThree");

    const handleDeleted = (banners) => {
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
                //     // axios.delete(`${import.meta.env.VITE_API_URL}/bannerImage/${banner._id}`)
                axios.delete(`http://localhost:4000/bannerImage/${banners?._id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Banner has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet><title>Flower Shop || Banner Change</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-4/12" Icon={GiButterflyFlower} fileColor="" title="Upload Banner Image " />
            <div className="overflow-x-auto md:py-8 py-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Banner img</th>
                            <th>Banner image serial </th>
                            <th>Banner Link </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover:bg-slate-200 rounded-md transition-all duration-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={oneBanner?.bannerImage} alt="Banner" className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{oneBanner?.bannerSerialOne}</td>
                            <td>{oneBanner?.bannerLink}</td>
                            {
                                oneBanner ?
                                    <div className="flex items-center justify-center gap-2 mt-8">
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/bannerChanges/bannerOne/${oneBanner?._id}`} className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDeleted(oneBanner)} className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center justify-center gap-2 mt-8">
                                        <div>
                                            <Link to="/dashboard/bannerChanges/bannerOne" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                        <div>
                                            <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                            }
                        </tr>
                        {/* banner two */}
                        <tr className="hover:bg-slate-200 bg-slate-100 rounded-md transition-all duration-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={twoBanner?.bannerImage} alt="Banner" className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{twoBanner?.bannerSerialTwo}</td>
                            <td>{twoBanner?.bannerLink}</td>
                            {
                                twoBanner ?
                                    <div className="flex items-center justify-center gap-2 mt-8">
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/bannerChanges/bannerTwo/${twoBanner?._id}`} className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDeleted(twoBanner)} className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center justify-center gap-2 mt-8">
                                        <div>
                                            <Link to="/dashboard/bannerChanges/bannerTwo" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</button>
                                        </div>
                                        <div>
                                            <button disabled className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                            }
                        </tr>

                        <tr className="hover:bg-slate-200 rounded-md transition-all duration-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={threeBanner?.bannerImage} alt="Banner" className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{threeBanner?.bannerSerialThree}</td>
                            <td>{threeBanner?.bannerLink}</td>
                            {
                                threeBanner ?
                                    <div className="flex items-center justify-center gap-2 mt-8">
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</button>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/bannerChanges/bannerThree/${threeBanner?._id}`} className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</Link>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDeleted(threeBanner)} className="text-sm font-medium tracking-wider bg-red-700 rounded-md py-1 px-3 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex items-center justify-center gap-2 mt-8">
                                        <div>
                                            <Link to="/dashboard/bannerChanges/bannerThree" className="file-sm font-medium tracking-wider bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">POST</Link>
                                        </div>
                                        <div>
                                            <button disabled className="file-sm font-medium tracking-wider bg-green-600 rounded-md py-1 px-3 text-white hover:bg-green-400 hover:text-slate-200 transition-all duration-200">Edit</button>
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

export default BannerChange;