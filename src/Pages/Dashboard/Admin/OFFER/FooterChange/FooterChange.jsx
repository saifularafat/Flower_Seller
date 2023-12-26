import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import DashboardTitle from "../../../../../components/DashboardTitle";
import { GiLotusFlower } from "react-icons/gi";

const FooterChange = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <Helmet><title>Flower Shop || Best Offer</title></Helmet>
            <DashboardTitle borderColor="border-slate-600" borderStyle=" border-dashed" borderWidth=" w-3/12" Icon={GiLotusFlower} textColor="" title="Footer" />
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* WAY SHOP is SECTION START*/}
                <div className="wayToShop bg-slate-300 p-3 mt-2 rounded-md">
                    <label className="label">
                        <span className="label-text text-lg  font-semibold uppercase">Way To Shop</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            {...register("shopName1", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("shopName1url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            {...register("shopName2", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("shopName2url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            {...register("shopName3", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("shopName3url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            {...register("shopName5", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("shopName5url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            {...register("shopName6", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("shopName6url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            {...register("shopName7", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("shopName7url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            {...register("shopName8", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("shopName8url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Shop"
                            {...register("shopName4", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("shopName4url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                </div>
                {/* WAY SHOP is SECTION  END*/}
                {/* CUSTOM SERVICE is SECTION  START*/}
                <div className="CustomService bg-blue-200 p-3 mt-2 rounded-md">
                    <label className="label">
                        <span className="label-text text-lg  font-semibold uppercase">Custom Service</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Service"
                            {...register("service1", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("service1url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Service"
                            {...register("service2", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("service2url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Service"
                            {...register("service3", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("service3url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Service"
                            {...register("service4", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("service4url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                </div>
                {/* CUSTOM SERVICE is SECTION  END*/}
                {/* OUR STORES START THE SECTION  */}
                <div className="ourStores bg-emerald-100 p-3 mt-2 rounded-md">
                    <label className="label">
                        <span className="label-text text-lg  font-semibold uppercase">OUR STORES</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Store"
                            {...register("store1", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("store1url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Store"
                            {...register("store2", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("store2url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Store"
                            {...register("store3", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("store3url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Store"
                            {...register("store4", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("store4url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                </div>
                {/* OUR STORES END THE SECTION  */}
                {/* CORPORATE START THE SECTION  */}
                <div className="CORPORATE bg-cyan-200 p-3 mt-2 rounded-md">
                    <label className="label">
                        <span className="label-text text-lg  font-semibold uppercase">CORPORATE</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate1", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate1url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate2", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate2url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate3", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate3url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate4", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate4url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate5", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate5url", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                </div>
                {/* OUR STORES END THE SECTION  */}
                {/* Footer Socket start THE SECTION  */}
                <div className="bg-violet-300 p-3 mt-2 rounded-md">
                    <label className="label ">
                        <span className="label-text text-lg  font-semibold uppercase">Footer Socket</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Text Footer Socket"
                            {...register("footerSocket", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="developer url"
                            {...register("developerURL", { required: true, maxLength: 20 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-600 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                        Best Offer
                        <GiLotusFlower className=" w-12 h-9 text-slate-100" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FooterChange;