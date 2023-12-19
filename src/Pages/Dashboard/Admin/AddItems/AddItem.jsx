import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register,
        formState: { errors },
        handleSubmit,
        reset } = useForm();
        
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="px-2">
            <Helmet>
                <title> Flower Shop || Add Item</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" bg-[#F3F3F3] rounded-md">
                    <div className="flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Flower Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Flower Name"
                                {...register("flowerName", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                            {errors.flowerName?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower Name is required</p>
                            )}
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Flower Price*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Flower Price"
                                {...register("price", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                            {errors.price?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower Price is required</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Offer Price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Offer Price"
                                {...register("offerPrice", { maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Parentis</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Price Parentis"
                                {...register("parentis", { maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                        </div>

                    </div>
                    <div className="md:flex items-center mt-3 space-x-3">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text text-3xl  font-semibold">Flower NavLink*</span>
                            </label>
                            <select {...register("flowerNav", { required: true })}
                                className="input input-bordered  text-xl w-full pl-2">
                                <option value="flowers">Flowers</option>
                                <option value="birthday">Birthday</option>
                                <option value="thanksgiving">Thanksgiving</option>
                                <option value="IndependenceDay">IndependenceDay</option>
                                <option value="disney">disney</option>
                                <option value="occasions">Occasions</option>
                                <option value="sympathy">Sympathy</option>
                                <option value="plants">Plants</option>
                                <option value="giftsMore">Gifts & More</option>
                                <option value="sale">Sale</option>
                                <option value="community">Community</option>
                            </select>
                            {errors.flowerNav?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower NavLink is required</p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text text-3xl  font-semibold">Flower Category*</span>
                            </label>
                            <select {...register("category", { required: true })}
                                className="input input-bordered  text-xl w-full pl-2">
                                <option selected>please choose category</option>
                                <option value="flower">Flower</option>
                                <option value="planet">Planet</option>
                                <option value="chocolate">Chocolate</option>
                                <option value="gift">Gift</option>
                                <option value="baby">BabyGift</option>
                                <option value="valentinesDay">ValentinesDay</option>
                            </select>
                            {errors.category?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower category is required</p>
                            )}
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl  font-semibold">Item Image *</span>
                        </label>
                        <input
                            {...register("flowerImage", { required: true })}
                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.flowerImage?.type === "required" && (
                            <p className="text-red-600 text-sm">Flower Image is required</p>
                        )}
                    </div>
                    {/* <input type="submit" value= {`Add Item ${<FaUtensils />}`} /> */}
                    <div className=" w-4/5 mx-auto text-center">
                        <button className="flex items-center w-full text-center py-2 px-6 bg-[#835D23] text-white text-2xl  font-semibold rounded-lg mt-3">
                            Add Item
                            {/* <FaUtensils className="pl-4 w-9 h-9" /> */}
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddItem;