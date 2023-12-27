import { useForm } from "react-hook-form";
import { LuFlower2 } from "react-icons/lu";

const LeftRightTwo = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
        return (
            <div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-file file-lg  font-semibold">Right One</span>
                        </label>
                        <input
                            type="file"
                            placeholder=""
                            defaultValue=""
                            {...register("imageTwo")}
                            className="input input-bordered w-full file-base pt-1"
                        />
                        <input
                            type="text"
                            placeholder=""
                            defaultValue="Left Right Serial Two"
                            {...register("LeftRightSerialTwo")}
                            className="hidden"
                        />
                        <div className="mt-4">
                            <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                                Right One
                                <LuFlower2 className=" w-12 h-9 file-slate-100" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    export default LeftRightTwo;