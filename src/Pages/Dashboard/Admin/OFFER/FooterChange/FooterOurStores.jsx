import { useForm } from 'react-hook-form';
import { GiLotusFlower } from 'react-icons/gi';

const FooterOurStores = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* CUSTOM SERVICE is SECTION  START*/}
                <div className="CustomService bg-blue-200 p-3 mt-2 rounded-md">
                    <label className="label">
                        <span className="label-text text-lg  font-semibold uppercase">Our Stores</span>
                    </label>
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
                </div>
                <input
                    type="text"
                    placeholder=""
                    defaultValue="Our Stores"
                    {...register("ourStores")}
                    className="hidden"
                />
                <input
                    type="text"
                    placeholder=""
                    defaultValue="ourStores"
                    {...register("category")}
                    className="hidden"
                />
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        Our Stores
                        <GiLotusFlower className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
                {/* CUSTOM SERVICE is SECTION  END*/}
            </form>
        </div>
    );
};

export default FooterOurStores;