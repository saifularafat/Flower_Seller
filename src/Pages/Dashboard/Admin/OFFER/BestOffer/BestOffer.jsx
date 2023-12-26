import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { GiFlowerPot, GiFlowers } from "react-icons/gi";
import DashboardTitle from "../../../../../components/DashboardTitle";

const BestOffer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <Helmet><title>Flower Shop || Best Offer</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-3/12" Icon={GiFlowers} textColor="" title="Top Best Offer " />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text text-lg  font-semibold">Top Best Offer</span>
                </label>
                <textarea cols={30} rows={15}
                    type="text"
                    placeholder="Please Type On The Best Offer Text"
                    {...register("topBestOffer", { required: true, maxLength: 60 })}
                    className="input input-bordered w-full text-base pt-1"
                />
                {errors.topBestOffer?.type === "required" && (
                    <p className="text-red-600 text-sm">Flower Name is required</p>
                )}

                <label className="label">
                    <span className="label-text text-lg  font-semibold">Best Offer Link</span>
                </label>
                <input
                    type="text"
                    placeholder="Please Type Best Offer Link"
                    {...register("topBestOfferLink", { required: true, maxLength: 20 })}
                    className="input input-bordered w-full text-base"
                />
                {errors.topBestOfferLink?.type === "required" && (
                    <p className="text-red-600 text-sm">Flower Name is required</p>
                )}
                  <div className="w-full pb-4 hidden">
                    <input
                        type="text"
                        placeholder=""
                        defaultValue="bestOffer"
                        {...register("category")}
                        className="hidden"
                    />
                </div>
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-600 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                        Best Offer
                        <GiFlowerPot className=" w-12 h-9 text-slate-100" />
                    </button>
                </div>
            </form>
            {/* Show in The Content text */}

            <div className="overflow-x-auto md:py-8 py-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Offer Title</th>
                            <th>Offer Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>/df df/edf sf324</td>
                            <th>
                                <button className="text-sm font-medium tracking-wider bg-blue-700 rounded-md py-1 px-3 text-white hover:bg-blue-300 hover:text-slate-900 transition-all duration-200">Edit</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BestOffer;