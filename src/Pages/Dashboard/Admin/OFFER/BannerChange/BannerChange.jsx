import { Helmet } from "react-helmet-async";
import { GiFlowerPot, GiFlowers } from "react-icons/gi";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { useForm } from "react-hook-form";

const BannerChange = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <Helmet><title>Flower Shop || Best Offer</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-4/12" Icon={GiFlowers} fileColor="" title="Upload Banner Image " />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex items-center gap-3">
                    <div className="md:w-1/2 w-full">
                        <label className="label">
                            <span className="label-file file-lg  font-semibold">Banner One</span>
                        </label>
                        <input 
                            type="file"
                            placeholder=""
                            {...register("bannerOne", { maxLength: 60 })}
                            className="input input-bordered w-full file-base pt-1"
                        />
                        {errors.bannerOne?.type === "required" && (
                            <p className="file-red-600 file-sm">Please Provide The Image</p>
                        )}
                    </div>
                    <div className="md:w-1/2 w-full">
                        <label className="label">
                            <span className="label-file file-lg  font-semibold">Banner Two</span>
                        </label>
                        <input
                            type="file"
                            placeholder=""
                            {...register("bannerTwo", { maxLength: 60 })}
                            className="input input-bordered w-full file-base pt-1"
                        />
                        {errors.bannerTwo?.type === "required" && (
                            <p className="file-red-600 file-sm">Please Provide The Image</p>
                        )}
                    </div>
                </div>
                <div className="md:flex items-center gap-3">
                    <div className="md:w-1/2 w-full">
                        <label className="label">
                            <span className="label-file file-lg  font-semibold">Banner Three</span>
                        </label>
                        <input
                            type="file"
                            placeholder=""
                            {...register("bannerThree", { maxLength: 60 })}
                            className="input input-bordered w-full file-base pt-1"
                        />
                        {errors.bannerThree?.type === "required" && (
                            <p className="file-red-600 file-sm">Please Provide The Image</p>
                        )}
                    </div>
                    <div className="md:w-1/2 w-full">
                        <label className="label">
                            <span className="label-file file-lg  font-semibold">Banner Four</span>
                        </label>
                        <input
                            type="file"
                            placeholder=""
                            {...register("bannerFour", { maxLength: 60 })}
                            className="input input-bordered w-full file-base pt-1"
                        />
                        {errors.bannerFour?.type === "required" && (
                            <p className="file-red-600 file-sm">Please Provide The Image</p>
                        )}
                    </div>
                </div>
                <div className="md:flex items-center gap-3">
                    <div className="md:w-1/2 w-full">
                        <label className="label">
                            <span className="label-file file-lg  font-semibold">Banner Five</span>
                        </label>
                        <input
                            type="file"
                            placeholder=""
                            {...register("bannerFive", { maxLength: 60 })}
                            className="input input-bordered w-full file-base pt-1"
                        />
                        {errors.bannerFive?.type === "required" && (
                            <p className="file-red-600 file-sm">Please Provide The Image</p>
                        )}
                    </div>
                    <div className="md:w-1/2 w-full">
                        <label className="label">
                            <span className="label-file file-lg  font-semibold">Banner Six</span>
                        </label>
                        <input
                            type="file"
                            placeholder=""
                            {...register("bannerSix", { maxLength: 60 })}
                            className="input input-bordered w-full file-base pt-1"
                        />
                        {errors.bannerSix?.type === "required" && (
                            <p className="file-red-600 file-sm">Please Provide The Image</p>
                        )}
                    </div>
                </div>
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        Banner Image
                        <GiFlowerPot className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
            </form>
            {/* Show in The Content file */}

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
                            <th>
                                <button className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 file-white hover:bg-blue-300 hover:file-slate-900 transition-all duration-200">Edit</button>
                            </th>
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
                            <th>
                                <button className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 file-white hover:bg-blue-300 hover:file-slate-900 transition-all duration-200">Edit</button>
                            </th>
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
                            <th>
                                <button className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 file-white hover:bg-blue-300 hover:file-slate-900 transition-all duration-200">Edit</button>
                            </th>
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
                            <td>Banner Image Four</td>
                            <th>
                                <button className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 file-white hover:bg-blue-300 hover:file-slate-900 transition-all duration-200">Edit</button>
                            </th>
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
                            <td>Banner Image Five</td>
                            <th>
                                <button className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 file-white hover:bg-blue-300 hover:file-slate-900 transition-all duration-200">Edit</button>
                            </th>
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
                            <td>Banner Image Six</td>
                            <th>
                                <button className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 file-white hover:bg-blue-300 hover:file-slate-900 transition-all duration-200">Edit</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BannerChange;