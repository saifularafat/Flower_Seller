import axios from 'axios';
import { useForm } from 'react-hook-form';
import { GiLotusFlower } from 'react-icons/gi';
import Swal from 'sweetalert2';

const FooterCustomService = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        const { service1, service1url, service2, service2url, service3, service3url, service4, service4url, category, customService } = data;
        const customServerInfo = {
            service1,
            service1url,
            service2,
            service2url,
            service3,
            service3url,
            service4,
            service4url,
            category,
            customService
        }
        axios.post(`http://localhost:4000/footerChange`, customServerInfo)
            .then(data => {
                console.log(data);
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'footer Custom Service add successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* CUSTOM SERVICE is SECTION  START*/}
                <div className="CustomService bg-blue-300 p-3 mt-2 rounded-md">
                    <label className="label">
                        <span className="label-text text-lg  font-semibold uppercase">Custom Service</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Service"
                            {...register("service1", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("service1url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Service"
                            {...register("service2", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("service2url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Service"
                            {...register("service3", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("service3url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Service"
                            {...register("service4", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("service4url", { required: true, maxLength: 30 })}
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
                <div className="w-1/2 hidden">
                    <label className="label">
                        <span className="label-text text-3xl font-Cinzel font-semibold">Category*</span>
                    </label>
                    <select {...register("category", { required: true })}
                        className="input input-bordered  text-xl w-full pl-2">
                        <option value="wayToShop ">Way To Shop</option>
                        <option value="customServer" selected>Custom Server</option>
                        <option value="ourStores">Our Stores</option>
                        <option value="corporate">Corporate</option>
                    </select>
                </div>
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