import { useForm } from 'react-hook-form';
import { GiLotusFlower } from 'react-icons/gi';

const FooterCustomService = () => {
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
                <input
                    type="text"
                    placeholder=""
                    defaultValue="Custom Service"
                    {...register("customService")}
                    className="hidden"
                />
                <input
                    type="text"
                    placeholder=""
                    defaultValue="customService"
                    {...register("category")}
                    className="hidden"
                />
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        Way To Shop
                        <GiLotusFlower className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
                {/* CUSTOM SERVICE is SECTION  END*/}
            </form>
        </div>
    );
};

export default FooterCustomService;