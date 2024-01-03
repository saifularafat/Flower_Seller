import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { GiFlowerPot } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";

const EditItemFlower = () => {
    const editFlower = useLoaderData();
    console.log(editFlower);
    const { flowerImg, flowerName, flowerNav, price, offerPrice, } = editFlower;

    const { register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="px-2">
            <Helmet>
                <title> Flower Shop || {editFlower?.flowerName}</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                <div className=" bg-[#F3F3F3] rounded-md">
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Flower Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Flower Name"
                                defaultValue={flowerName}
                                {...register("flowerName")}
                                className="input input-bordered w-full text-base"
                            />

                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Flower Price*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Flower Price"
                                defaultValue={price}
                                {...register("price")}
                                className="input input-bordered w-full text-base"
                            />

                        </div>
                    </div>
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Offer Price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Offer Price"
                                defaultValue={editFlower?.offerPrice}
                                {...register("offerPrice", { maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Percent</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Price Percent"
                                defaultValue={editFlower?.percent}
                                {...register("percent")}
                                className="input input-bordered w-full text-base"
                            />
                        </div>

                    </div>
                    <div className="md:flex items-center mt-3 space-x-3">
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text md:text-3xl text-xl font-semibold">Flower NavLink*</span>
                            </label>
                            <select {...register("flowerNav")}
                                className="input input-bordered  text-xl w-full pl-2"
                                defaultValue={editFlower?.flowerCategory}>
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
                        </div>
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text md:text-3xl text-xl font-semibold">Flower Category*</span>
                            </label>
                            {/* how to the Show in the category and navLink the click button on the state set  */}
                            <select {...register("category")}
                                className="input input-bordered  text-xl w-full pl-2">
                                <option value="flower" selected>Flower</option>
                                <option value="planet">Planet</option>
                                <option value="chocolate">Chocolate</option>
                                <option value="gift">Gift</option>
                                <option value="baby">BabyGift</option>
                                <option value="lave">Love</option>
                                <option value="valentinesDay">ValentinesDay</option>
                            </select>
                            {errors.category?.type === "required" && (
                                <p className="text-red-600 text-sm">Flower category is required</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl  font-semibold">Item Image <br /> <span className="text-sm text-red-700">Please Provide The Image Link</span></span>
                            </label>
                            <input
                                {...register("flowerImage")}
                                // type="file"
                                defaultValue={flowerImg}
                                className="file-input file-input-bordered w-full px-4" />

                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="flex items-center justify-center w-full bg-blue-600 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                            {editFlower?.flowerName}
                            <GiFlowerPot className=" w-12 h-9 text-slate-100" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditItemFlower;