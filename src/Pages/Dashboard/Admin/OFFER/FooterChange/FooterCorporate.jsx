import { useForm } from "react-hook-form";
import { GiLotusFlower } from "react-icons/gi";

const FooterCorporate = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <input
                    type="text"
                    placeholder=""
                    defaultValue="Corporate"
                    {...register("corporate")}
                    className="hidden"
                />
                <input
                    type="text"
                    placeholder=""
                    defaultValue="corporate"
                    {...register("category")}
                    className="hidden"
                />
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                       Corporate
                        <GiLotusFlower className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FooterCorporate;