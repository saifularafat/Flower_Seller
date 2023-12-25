import { Helmet } from "react-helmet-async";
import { LuFlower2 } from "react-icons/lu";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LeftRightBanner = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <Helmet><title>Flower Shop || Left & Right image Change</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-4/12" Icon={LuFlower2} fileColor="" title=" Left & Right Image " />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-file file-lg  font-semibold">Left One</span>
                </label>
                <input
                    type="file"
                    placeholder=""
                    {...register("imageOne")}
                    className="input input-bordered w-full file-base pt-1"
                />
                {errors.imageOne?.type === "required" && (
                    <p className="file-red-600 file-sm">Please Provide The Image</p>
                )}

                <label className="label">
                    <span className="label-file file-lg  font-semibold">Right Two</span>
                </label>
                <input
                    type="file"
                    placeholder=""
                    {...register("imageTwo")}
                    className="input input-bordered w-full file-base pt-1"
                />
                {errors.imageTwo?.type === "required" && (
                    <p className="file-red-600 file-sm">Please Provide The Image</p>
                )}
                <label className="label">
                    <span className="label-file file-lg  font-semibold">Left Three</span>
                </label>
                <input
                    type="file"
                    placeholder=""
                    {...register("imageThree")}
                    className="input input-bordered w-full file-base pt-1"
                />
                {errors.imageThree?.type === "required" && (
                    <p className="file-red-600 file-sm">Please Provide The Image</p>
                )}
                <label className="label">
                    <span className="label-file file-lg  font-semibold">Right Four</span>
                </label>
                <input
                    type="file"
                    placeholder=""
                    {...register("imageFour")}
                    className="input input-bordered w-full file-base pt-1"
                />
                {errors.imageFour?.type === "required" && (
                    <p className="file-red-600 file-sm">Please Provide The Image</p>
                )}
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        LeftRight Image
                        <LuFlower2 className=" w-12 h-9 file-slate-100" />
                    </button >
                </div>
            </form>
            {/* Show in The Content file */}

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
                            <td>Left Image One</td>
                            <th>
                                <Link to="" className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">Edit</Link >
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
                            <td>Right Image Two</td>
                            <th>
                                <Link to="" className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">Edit</Link >
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
                            <td>Left Image Three</td>
                            <th>
                                <Link to="" className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">Edit</Link >
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
                            <td>Right Image Four</td>
                            <th>
                                <Link to="" className="file-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">Edit</Link >
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeftRightBanner;