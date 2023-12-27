import axios from "axios";
import { useForm } from "react-hook-form";
import { GiLotusFlower } from "react-icons/gi";
import Swal from "sweetalert2";

const FooterWayShop = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        const { shopName1, shopName1url, shopName2, shopName2url, shopName3, shopName3url, shopName4, shopName4url, shopName5, shopName5url, shopName6, shopName6url, shopName7, shopName7url, shopName8, shopName8url, category, wayToShop } = data;
        const wayToShopInfo = {
            shopName1,
            shopName1url,
            shopName2,
            shopName2url,
            shopName3,
            shopName3url,
            shopName4,
            shopName4url,
            shopName5,
            shopName5url,
            shopName6,
            shopName6url,
            shopName7,
            shopName7url,
            shopName8,
            shopName8url,
            category,
            wayToShop
        }
        console.log(wayToShopInfo);
        // axios.post(`${import.meta.env.LOCAL_API_URL}/footerChange`, wayToShopInfo)
        axios.post(`http://localhost:4000/footerChange`, wayToShopInfo)
            .then(data => {
                console.log(data);
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'footer way to shop add successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
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
                            {...register("shopName6url", { required: true, maxLength: 20 })}
                            className="input input-5ordered w-full text-base"
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
                </div>
                <input
                    type="text"
                    placeholder=""
                    defaultValue="Way To Shop"
                    {...register("wayToShop")}
                    className="hidden"
                />
                <div className="w-1/2 hidden">
                    <label className="label">
                        <span className="label-text text-3xl font-Cinzel font-semibold">Category*</span>
                    </label>
                    <select {...register("category", { required: true })}
                        className="input input-bordered  text-xl w-full pl-2">
                        <option value="wayToShop" selected>Way To Shop</option>
                        <option value="customServer">Custom Server</option>
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
                {/* WAY SHOP is SECTION  END*/}
            </form>
        </div >
    );
};

export default FooterWayShop;