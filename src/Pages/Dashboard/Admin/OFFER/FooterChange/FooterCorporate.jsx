import axios from "axios";
import { useForm } from "react-hook-form";
import { GiLotusFlower } from "react-icons/gi";
import Swal from "sweetalert2";

const FooterCorporate = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        const { corporate1, corporate1url, corporate2, corporate2url, corporate3, corporate3url, corporate4, corporate4url, corporate5, corporate5url, category, corporate, footerSocket, developerURL } = data;
        const customServerInfo = {
            corporate1,
            corporate1url,
            corporate2,
            corporate2url,
            corporate3,
            corporate3url,
            corporate4,
            corporate4url,
            corporate5,
            corporate5url,
            category,
            corporate,
            footerSocket,
            developerURL
        }
        axios.post(`http://localhost:4000/footerChange`, customServerInfo)
            .then(data => {
                console.log(data);
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'footer Corporate add successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* CORPORATE START THE SECTION  */}
                <div className="CORPORATE bg-cyan-300 p-3 mt-2 rounded-md">
                    <label className="label">
                        <span className="label-text text-lg  font-semibold uppercase">CORPORATE</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate1", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate1url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate2", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate2url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate3", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate3url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate4", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate4url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Corporate"
                            {...register("corporate5", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("corporate5url", { required: true, maxLength: 30 })}
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
                            {...register("footerSocket", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="developer url"
                            {...register("developerURL", { required: true, maxLength: 30 })}
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
                <div className="w-1/2 hidden">
                    <label className="label">
                        <span className="label-text text-3xl font-Cinzel font-semibold">Category*</span>
                    </label>
                    <select {...register("category", { required: true })}
                        className="input input-bordered  text-xl w-full pl-2">
                        <option value="wayToShop ">Way To Shop</option>
                        <option value="customServer">Custom Server</option>
                        <option value="ourStores">Our Stores</option>
                        <option value="corporate" selected>Corporate</option>
                    </select>
                </div>
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