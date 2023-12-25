import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { GiTwirlyFlower } from "react-icons/gi";
import DashboardTitle from "../../../../../components/DashboardTitle";

const SliderChanges = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
        <Helmet><title>Flower Shop || Slider Change</title></Helmet>
        <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-4/12" Icon={GiTwirlyFlower } fileColor="" title="Change Slider Image " />
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex items-center gap-3">
                <div className="md:w-1/2 w-full">
                    <label className="label">
                        <span className="label-file file-lg  font-semibold">Slider One</span>
                    </label>
                    <input 
                        type="file"
                        placeholder=""
                        {...register("sliderOne")}
                        className="input input-bordered w-full file-base pt-1"
                    />
                    {errors.sliderOne?.type === "required" && (
                        <p className="file-red-600 file-sm">Please Provide The Image</p>
                    )}
                </div>
                <div className="md:w-1/2 w-full">
                    <label className="label">
                        <span className="label-file file-lg  font-semibold">Slider Two</span>
                    </label>
                    <input
                        type="file"
                        placeholder=""
                        {...register("sliderTwo")}
                        className="input input-bordered w-full file-base pt-1"
                    />
                    {errors.sliderTwo?.type === "required" && (
                        <p className="file-red-600 file-sm">Please Provide The Image</p>
                    )}
                </div>
            </div>
            <div className="md:flex items-center gap-3">
                <div className="md:w-1/2 w-full">
                    <label className="label">
                        <span className="label-file file-lg  font-semibold">Slider Three</span>
                    </label>
                    <input
                        type="file"
                        placeholder=""
                        {...register("sliderThree")}
                        className="input input-bordered w-full file-base pt-1"
                    />
                    {errors.sliderThree?.type === "required" && (
                        <p className="file-red-600 file-sm">Please Provide The Image</p>
                    )}
                </div>
                <div className="md:w-1/2 w-full">
                    <label className="label">
                        <span className="label-file file-lg  font-semibold">Slider Four</span>
                    </label>
                    <input
                        type="file"
                        placeholder=""
                        {...register("sliderFour")}
                        className="input input-bordered w-full file-base pt-1"
                    />
                    {errors.sliderFour?.type === "required" && (
                        <p className="file-red-600 file-sm">Please Provide The Image</p>
                    )}
                </div>
            </div>
            <div className="md:flex items-center gap-3">
                <div className="md:w-1/2 w-full">
                    <label className="label">
                        <span className="label-file file-lg  font-semibold">Slider Five</span>
                    </label>
                    <input
                        type="file"
                        placeholder=""
                        {...register("sliderFive")}
                        className="input input-bordered w-full file-base pt-1"
                    />
                    {errors.sliderFive?.type === "required" && (
                        <p className="file-red-600 file-sm">Please Provide The Image</p>
                    )}
                </div>
                <div className="md:w-1/2 w-full">
                    <label className="label">
                        <span className="label-file file-lg  font-semibold">Slider Six</span>
                    </label>
                    <input
                        type="file"
                        placeholder=""
                        {...register("sliderSix")}
                        className="input input-bordered w-full file-base pt-1"
                    />
                    {errors.sliderSix?.type === "required" && (
                        <p className="file-red-600 file-sm">Please Provide The Image</p>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                    Slider Image
                    <GiTwirlyFlower  className=" w-12 h-9 file-slate-100" />
                </button>
            </div>
        </form>
        {/* Show in The Content file */}

        <div className="overflow-x-auto md:py-8 py-3">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Slider img</th>
                        <th>Slider image serial </th>
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
                        <td>Slider Image One</td>
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
                        <td>Slider Image Two</td>
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
                        <td>Slider Image Three</td>
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
                        <td>Slider Image Four</td>
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
                        <td>Slider Image Five</td>
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
                        <td>Slider Image Six</td>
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

export default SliderChanges;