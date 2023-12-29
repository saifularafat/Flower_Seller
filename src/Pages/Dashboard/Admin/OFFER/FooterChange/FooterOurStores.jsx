import axios from 'axios';
import { useForm } from 'react-hook-form';
import { GiLotusFlower } from 'react-icons/gi';
import Swal from 'sweetalert2';

const FooterOurStores = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        const { store1, store1url, store2, store2url, store3, store3url, store4, store4url, category, ourStores } = data;
        const ourStoresInfo = {
            store1,
            store1url,
            store2,
            store2url,
            store3,
            store3url,
            store4,
            store4url,
            category,
            ourStores
        }
        axios.post(`http://localhost:4000/footerChange`, ourStoresInfo)
            .then(data => {
                console.log(data);
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'footer Our Stores add successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* OUR STORES START THE SECTION  */}
                <div className="ourStores bg-emerald-100 p-3 mt-2 rounded-md">
                    <label className="label">
                        <span className="label-text text-lg  font-semibold uppercase">OUR STORES</span>
                    </label>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Store"
                            {...register("store1", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("store1url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Store"
                            {...register("store2", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("store2url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Store"
                            {...register("store3", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("store3url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                        <input
                            type="text"
                            placeholder="Name Of Store"
                            {...register("store4", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                        <input
                            type="text"
                            placeholder="please url"
                            {...register("store4url", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full text-base"
                        />
                    </div>
                </div>
                {/* OUR STORES END THE SECTION  */}
                <input
                    type="text"
                    placeholder=""
                    defaultValue="Our Stores"
                    {...register("ourStores")}
                    className="hidden"
                />
                <div className="w-1/2 hidden">
                    <label className="label">
                        <span className="label-text text-3xl font-Cinzel font-semibold">Category*</span>
                    </label>
                    <select {...register("category", { required: true })}
                        className="input input-bordered  text-xl w-full pl-2">
                        <option value="wayToShop">Way To Shop</option>
                        <option value="customServer">Custom Server</option>
                        <option value="ourStores" selected>Our Stores</option>
                        <option value="corporate">Corporate</option>
                    </select>
                </div>
                <div className="mt-4">
                    <button className="flex items-center justify-center w-full bg-blue-500 rounded-md py-[6px] text-white file-xl font-semibold tracking-wide">
                        Our Stores
                        <GiLotusFlower className=" w-12 h-9 file-slate-100" />
                    </button>
                </div>
                {/* CUSTOM store is SECTION  END*/}
            </form>
        </div>
    );
};

export default FooterOurStores;